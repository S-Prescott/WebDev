//open connection to gateway
h:hopen `::8007:admin:admin
//format and execute functions
h".gw.formatresponse:{[status;sync;result] $[sync and not status; 'result; `status`result!(status;result)]}"
h".aqrest.execute:{[req;props] @[value;req;{(neg .z.w)(.gw.formatresponse[0b;0b;\"error: \",x])}]}"
//req1
h".qrestfunc.currentprice0:{.gw.asyncexec[({a:select currentprice:avg price by sym,5 xbar time.minute from trade;b:exec distinct sym from a;exec b#sym!currentprice by minute from a};x);`rdb]}"
h".qrestfunc.currentprice1:{.gw.asyncexec[({a:select currentprice:avg price by sym,5 xbar time.minute from trade where date=.z.D-1;b:exec distinct sym from a;exec b#sym!currentprice by minute from a};x);`hdb]}"
h".qrestfunc.currentprice2:{.gw.asyncexec[({a:select currentprice:avg price by sym,5 xbar time.minute from trade where date=.z.D-2;b:exec distinct sym from a;exec b#sym!currentprice by minute from a};x);`hdb]}"
//req2
h".qrestfunc.minmax0:{.gw.asyncexec[({select Max:max price, Min:min price by sym from trade};x);`rdb]}"
h".qrestfunc.minmax1:{.gw.asyncexec[({select Max:max price, Min:min price by sym from trade where date=.z.D-1};x);`hdb]}"
h".qrestfunc.minmax2:{.gw.asyncexec[({select Max:max price, Min:min price by sym from trade where date=.z.D-2};x);`hdb]}"
//req3
h".qrestfunc.runningavg0:{.gw.asyncexec[({a:select last average by sym,60 xbar time.minute from update average:avgs price by sym from trade;b:exec distinct sym from a;exec b#sym!average by minute from a};x);`rdb]}"
h".qrestfunc.runningavg1:{.gw.asyncexec[({a:select last average by sym,60 xbar time.minute from update average:avgs price by sym from trade where date=.z.D-1;b:exec distinct sym from a;exec b#sym!average by minute from a};x);`hdb]}"
h".qrestfunc.runningavg2:{.gw.asyncexec[({a:select last average by sym,60 xbar time.minute from update average:avgs price by sym from trade where date=.z.D-2;b:exec distinct sym from a;exec b#sym!average by minute from a};x);`hdb]}"
//req4
h".qrestfunc.pricechange:{.gw.asyncexec[({select latestPrice:last price,Change:last price - prev price by sym from trade};x);`rdb]}"
//req5
//rework for front end stitching
h"hightraderdb:{.gw.asyncexec[({[p]st:p[`st];et:p[`et];select from (select volume:sum size by sym from trade where time within (st;et)) where volume=max volume};x);`rdb]}"
h".qrestfunc.hightraderdb:{[x]p:.j.k x;p[`st]:\"T\"$p[`st];p[`et]:\"T\"$p[`et];hightraderdb[p]}"
h"hightradehdb:{.gw.asyncexec[({[p]dt:p[`dt];st:p[`st];et:p[`et];select from (select volume:sum size by sym from trade where date=dt,time within (st;et)) where volume=max volume};x);`hdb]}"
h".qrestfunc.hightradehdb:{[x]p:.j.k x;p[`dt]:\"D\"$p[`dt];p[`st]:\"T\"$p[`st];p[`et]:\"T\"$p[`et];hightradehdb[p]}"
//req6
//rework for front end stitching
h"volatilitybyday:{.gw.asyncexec[({[p]dt:p[`dt];select volatility:sqrt var price by sym,30 xbar time.minute from trade where time.date=dt};x);`rdb`hdb]}"
h".qrestfunc.volatilitybyday:{[x]p:.j.k x;v:\"D\"$p[`dt];volatilitybyday[p]}"