var Module=typeof pyodide._module!=="undefined"?pyodide._module:{};if(!Module.expectedDataFileDownloads){Module.expectedDataFileDownloads=0}Module.expectedDataFileDownloads++;(function(){var loadPackage=function(metadata){var PACKAGE_PATH;if(typeof window==="object"){PACKAGE_PATH=window["encodeURIComponent"](window.location.pathname.toString().substring(0,window.location.pathname.toString().lastIndexOf("/"))+"/")}else if(typeof location!=="undefined"){PACKAGE_PATH=encodeURIComponent(location.pathname.toString().substring(0,location.pathname.toString().lastIndexOf("/"))+"/")}else{throw"using preloaded data can only be done on a web page or in a web worker"}var PACKAGE_NAME="python-dateutil.data";var REMOTE_PACKAGE_BASE="python-dateutil.data";if(typeof Module["locateFilePackage"]==="function"&&!Module["locateFile"]){Module["locateFile"]=Module["locateFilePackage"];err("warning: you defined Module.locateFilePackage, that has been renamed to Module.locateFile (using your locateFilePackage for now)")}var REMOTE_PACKAGE_NAME=Module["locateFile"]?Module["locateFile"](REMOTE_PACKAGE_BASE,""):REMOTE_PACKAGE_BASE;var REMOTE_PACKAGE_SIZE=metadata["remote_package_size"];var PACKAGE_UUID=metadata["package_uuid"];function fetchRemotePackage(packageName,packageSize,callback,errback){var xhr=new XMLHttpRequest;xhr.open("GET",packageName,true);xhr.responseType="arraybuffer";xhr.onprogress=function(event){var url=packageName;var size=packageSize;if(event.total)size=event.total;if(event.loaded){if(!xhr.addedTotal){xhr.addedTotal=true;if(!Module.dataFileDownloads)Module.dataFileDownloads={};Module.dataFileDownloads[url]={loaded:event.loaded,total:size}}else{Module.dataFileDownloads[url].loaded=event.loaded}var total=0;var loaded=0;var num=0;for(var download in Module.dataFileDownloads){var data=Module.dataFileDownloads[download];total+=data.total;loaded+=data.loaded;num++}total=Math.ceil(total*Module.expectedDataFileDownloads/num);if(Module["setStatus"])Module["setStatus"]("Downloading data... ("+loaded+"/"+total+")")}else if(!Module.dataFileDownloads){if(Module["setStatus"])Module["setStatus"]("Downloading data...")}};xhr.onerror=function(event){throw new Error("NetworkError for: "+packageName)};xhr.onload=function(event){if(xhr.status==200||xhr.status==304||xhr.status==206||xhr.status==0&&xhr.response){var packageData=xhr.response;callback(packageData)}else{throw new Error(xhr.statusText+" : "+xhr.responseURL)}};xhr.send(null)}function handleError(error){console.error("package error:",error)}var fetchedCallback=null;var fetched=Module["getPreloadedPackage"]?Module["getPreloadedPackage"](REMOTE_PACKAGE_NAME,REMOTE_PACKAGE_SIZE):null;if(!fetched)fetchRemotePackage(REMOTE_PACKAGE_NAME,REMOTE_PACKAGE_SIZE,function(data){if(fetchedCallback){fetchedCallback(data);fetchedCallback=null}else{fetched=data}},handleError);function runWithFS(){function assert(check,msg){if(!check)throw msg+(new Error).stack}Module["FS_createPath"]("/","lib",true,true);Module["FS_createPath"]("/lib","python3.8",true,true);Module["FS_createPath"]("/lib/python3.8","site-packages",true,true);Module["FS_createPath"]("/lib/python3.8/site-packages","dateutil",true,true);Module["FS_createPath"]("/lib/python3.8/site-packages/dateutil","parser",true,true);Module["FS_createPath"]("/lib/python3.8/site-packages/dateutil","tz",true,true);Module["FS_createPath"]("/lib/python3.8/site-packages/dateutil","zoneinfo",true,true);Module["FS_createPath"]("/lib/python3.8/site-packages","python_dateutil-2.8.1-py3.8.egg-info",true,true);function processPackageData(arrayBuffer){assert(arrayBuffer,"Loading data file failed.");assert(arrayBuffer instanceof ArrayBuffer,"bad input to processPackageData");var byteArray=new Uint8Array(arrayBuffer);var curr;var compressedData={data:null,cachedOffset:304814,cachedIndexes:[-1,-1],cachedChunks:[null,null],offsets:[0,1370,2824,4233,5621,6583,7628,8479,9568,10165,11102,11870,12474,13256,14088,15397,16789,17952,18942,19839,20999,22358,23434,24637,25781,26582,27475,28238,29009,30050,31122,32072,32795,33631,34459,35648,37016,38069,38907,39864,40807,41818,42955,44001,45044,46129,47141,47911,48772,50075,51498,52693,53353,54470,55653,56603,57619,58740,59576,60814,62003,63170,64149,65134,66046,67119,67996,69111,70310,71519,72595,73785,75102,76318,77330,78099,79037,79827,81289,82516,83601,84684,85812,87001,88227,89552,90758,91998,92966,94155,95192,96332,97705,98858,100086,101198,102143,103322,104681,105814,106979,108111,109194,110299,111530,112649,113899,115027,116076,117504,118570,119755,120992,122131,122977,123776,124846,126108,127118,127846,128964,130338,131738,133169,134278,135448,136756,138071,139245,140664,142026,143288,144607,146611,148659,150707,152755,154803,156859,158907,160955,163003,165051,167099,169147,171193,173241,175281,177335,179383,181440,183488,185532,187580,189628,191663,193711,195768,197816,199864,201920,203968,206016,208064,210112,212160,214208,216256,218304,220352,222400,224448,226496,228535,230549,232597,234645,236693,238741,240789,242837,244885,246933,248981,251029,253077,255133,257181,259229,261281,263329,265377,267425,269473,271521,273569,275624,277672,279720,281768,283816,285864,287912,289960,292008,294056,296104,298152,299209,300380,301665,303049,304203],sizes:[1370,1454,1409,1388,962,1045,851,1089,597,937,768,604,782,832,1309,1392,1163,990,897,1160,1359,1076,1203,1144,801,893,763,771,1041,1072,950,723,836,828,1189,1368,1053,838,957,943,1011,1137,1046,1043,1085,1012,770,861,1303,1423,1195,660,1117,1183,950,1016,1121,836,1238,1189,1167,979,985,912,1073,877,1115,1199,1209,1076,1190,1317,1216,1012,769,938,790,1462,1227,1085,1083,1128,1189,1226,1325,1206,1240,968,1189,1037,1140,1373,1153,1228,1112,945,1179,1359,1133,1165,1132,1083,1105,1231,1119,1250,1128,1049,1428,1066,1185,1237,1139,846,799,1070,1262,1010,728,1118,1374,1400,1431,1109,1170,1308,1315,1174,1419,1362,1262,1319,2004,2048,2048,2048,2048,2056,2048,2048,2048,2048,2048,2048,2046,2048,2040,2054,2048,2057,2048,2044,2048,2048,2035,2048,2057,2048,2048,2056,2048,2048,2048,2048,2048,2048,2048,2048,2048,2048,2048,2048,2039,2014,2048,2048,2048,2048,2048,2048,2048,2048,2048,2048,2048,2056,2048,2048,2052,2048,2048,2048,2048,2048,2048,2055,2048,2048,2048,2048,2048,2048,2048,2048,2048,2048,2048,1057,1171,1285,1384,1154,611],successes:[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,0,0,1,0,0,0,0,0,0,1,0,1,1,0,1,0,1,0,0,1,0,1,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,1,0,0,1,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1]};compressedData["data"]=byteArray;assert(typeof Module.LZ4==="object","LZ4 not present - was your app build with  -s LZ4=1  ?");Module.LZ4.loadPackage({metadata:metadata,compressedData:compressedData},true);Module["removeRunDependency"]("datafile_python-dateutil.data")}Module["addRunDependency"]("datafile_python-dateutil.data");if(!Module.preloadResults)Module.preloadResults={};Module.preloadResults[PACKAGE_NAME]={fromCache:false};if(fetched){processPackageData(fetched);fetched=null}else{fetchedCallback=processPackageData}}if(Module["calledRun"]){runWithFS()}else{if(!Module["preRun"])Module["preRun"]=[];Module["preRun"].push(runWithFS)}};loadPackage({files:[{filename:"/lib/python3.8/site-packages/dateutil/__init__.py",start:0,end:222,audio:0},{filename:"/lib/python3.8/site-packages/dateutil/_common.py",start:222,end:1154,audio:0},{filename:"/lib/python3.8/site-packages/dateutil/_version.py",start:1154,end:1296,audio:0},{filename:"/lib/python3.8/site-packages/dateutil/easter.py",start:1296,end:3980,audio:0},{filename:"/lib/python3.8/site-packages/dateutil/relativedelta.py",start:3980,end:28884,audio:0},{filename:"/lib/python3.8/site-packages/dateutil/tzwin.py",start:28884,end:28943,audio:0},{filename:"/lib/python3.8/site-packages/dateutil/utils.py",start:28943,end:30902,audio:0},{filename:"/lib/python3.8/site-packages/dateutil/rrule.py",start:30902,end:97641,audio:0},{filename:"/lib/python3.8/site-packages/dateutil/parser/__init__.py",start:97641,end:99407,audio:0},{filename:"/lib/python3.8/site-packages/dateutil/parser/_parser.py",start:99407,end:158211,audio:0},{filename:"/lib/python3.8/site-packages/dateutil/parser/isoparser.py",start:158211,end:171309,audio:0},{filename:"/lib/python3.8/site-packages/dateutil/tz/__init__.py",start:171309,end:171753,audio:0},{filename:"/lib/python3.8/site-packages/dateutil/tz/_common.py",start:171753,end:184730,audio:0},{filename:"/lib/python3.8/site-packages/dateutil/tz/_factories.py",start:184730,end:187299,audio:0},{filename:"/lib/python3.8/site-packages/dateutil/tz/tz.py",start:187299,end:250231,audio:0},{filename:"/lib/python3.8/site-packages/dateutil/tz/win.py",start:250231,end:263166,audio:0},{filename:"/lib/python3.8/site-packages/dateutil/zoneinfo/__init__.py",start:263166,end:269055,audio:0},{filename:"/lib/python3.8/site-packages/dateutil/zoneinfo/rebuild.py",start:269055,end:270774,audio:0},{filename:"/lib/python3.8/site-packages/dateutil/zoneinfo/dateutil-zoneinfo.tar.gz",start:270774,end:424089,audio:0},{filename:"/lib/python3.8/site-packages/python_dateutil-2.8.1-py3.8.egg-info/PKG-INFO",start:424089,end:433408,audio:0},{filename:"/lib/python3.8/site-packages/python_dateutil-2.8.1-py3.8.egg-info/SOURCES.txt",start:433408,end:435476,audio:0},{filename:"/lib/python3.8/site-packages/python_dateutil-2.8.1-py3.8.egg-info/dependency_links.txt",start:435476,end:435477,audio:0},{filename:"/lib/python3.8/site-packages/python_dateutil-2.8.1-py3.8.egg-info/requires.txt",start:435477,end:435486,audio:0},{filename:"/lib/python3.8/site-packages/python_dateutil-2.8.1-py3.8.egg-info/top_level.txt",start:435486,end:435495,audio:0},{filename:"/lib/python3.8/site-packages/python_dateutil-2.8.1-py3.8.egg-info/zip-safe",start:435495,end:435496,audio:0}],remote_package_size:308910,package_uuid:"849e182b-c515-465e-b6b2-33374a029705"})})();