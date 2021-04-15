var Module=typeof pyodide._module!=="undefined"?pyodide._module:{};if(!Module.expectedDataFileDownloads){Module.expectedDataFileDownloads=0}Module.expectedDataFileDownloads++;(function(){var loadPackage=function(metadata){var PACKAGE_PATH;if(typeof window==="object"){PACKAGE_PATH=window["encodeURIComponent"](window.location.pathname.toString().substring(0,window.location.pathname.toString().lastIndexOf("/"))+"/")}else if(typeof location!=="undefined"){PACKAGE_PATH=encodeURIComponent(location.pathname.toString().substring(0,location.pathname.toString().lastIndexOf("/"))+"/")}else{throw"using preloaded data can only be done on a web page or in a web worker"}var PACKAGE_NAME="py.data";var REMOTE_PACKAGE_BASE="py.data";if(typeof Module["locateFilePackage"]==="function"&&!Module["locateFile"]){Module["locateFile"]=Module["locateFilePackage"];err("warning: you defined Module.locateFilePackage, that has been renamed to Module.locateFile (using your locateFilePackage for now)")}var REMOTE_PACKAGE_NAME=Module["locateFile"]?Module["locateFile"](REMOTE_PACKAGE_BASE,""):REMOTE_PACKAGE_BASE;var REMOTE_PACKAGE_SIZE=metadata["remote_package_size"];var PACKAGE_UUID=metadata["package_uuid"];function fetchRemotePackage(packageName,packageSize,callback,errback){var xhr=new XMLHttpRequest;xhr.open("GET",packageName,true);xhr.responseType="arraybuffer";xhr.onprogress=function(event){var url=packageName;var size=packageSize;if(event.total)size=event.total;if(event.loaded){if(!xhr.addedTotal){xhr.addedTotal=true;if(!Module.dataFileDownloads)Module.dataFileDownloads={};Module.dataFileDownloads[url]={loaded:event.loaded,total:size}}else{Module.dataFileDownloads[url].loaded=event.loaded}var total=0;var loaded=0;var num=0;for(var download in Module.dataFileDownloads){var data=Module.dataFileDownloads[download];total+=data.total;loaded+=data.loaded;num++}total=Math.ceil(total*Module.expectedDataFileDownloads/num);if(Module["setStatus"])Module["setStatus"]("Downloading data... ("+loaded+"/"+total+")")}else if(!Module.dataFileDownloads){if(Module["setStatus"])Module["setStatus"]("Downloading data...")}};xhr.onerror=function(event){throw new Error("NetworkError for: "+packageName)};xhr.onload=function(event){if(xhr.status==200||xhr.status==304||xhr.status==206||xhr.status==0&&xhr.response){var packageData=xhr.response;callback(packageData)}else{throw new Error(xhr.statusText+" : "+xhr.responseURL)}};xhr.send(null)}function handleError(error){console.error("package error:",error)}var fetchedCallback=null;var fetched=Module["getPreloadedPackage"]?Module["getPreloadedPackage"](REMOTE_PACKAGE_NAME,REMOTE_PACKAGE_SIZE):null;if(!fetched)fetchRemotePackage(REMOTE_PACKAGE_NAME,REMOTE_PACKAGE_SIZE,function(data){if(fetchedCallback){fetchedCallback(data);fetchedCallback=null}else{fetched=data}},handleError);function runWithFS(){function assert(check,msg){if(!check)throw msg+(new Error).stack}Module["FS_createPath"]("/","lib",true,true);Module["FS_createPath"]("/lib","python3.8",true,true);Module["FS_createPath"]("/lib/python3.8","site-packages",true,true);Module["FS_createPath"]("/lib/python3.8/site-packages","py",true,true);Module["FS_createPath"]("/lib/python3.8/site-packages/py","_process",true,true);Module["FS_createPath"]("/lib/python3.8/site-packages/py","_code",true,true);Module["FS_createPath"]("/lib/python3.8/site-packages/py","_path",true,true);Module["FS_createPath"]("/lib/python3.8/site-packages/py","_vendored_packages",true,true);Module["FS_createPath"]("/lib/python3.8/site-packages/py/_vendored_packages","apipkg-1.4.dist-info",true,true);Module["FS_createPath"]("/lib/python3.8/site-packages/py/_vendored_packages","iniconfig-1.0.0.dist-info",true,true);Module["FS_createPath"]("/lib/python3.8/site-packages/py","_io",true,true);Module["FS_createPath"]("/lib/python3.8/site-packages/py","_log",true,true);Module["FS_createPath"]("/lib/python3.8/site-packages","py-1.9.0-py3.8.egg-info",true,true);function processPackageData(arrayBuffer){assert(arrayBuffer,"Loading data file failed.");assert(arrayBuffer instanceof ArrayBuffer,"bad input to processPackageData");var byteArray=new Uint8Array(arrayBuffer);var curr;var compressedData={data:null,cachedOffset:171815,cachedIndexes:[-1,-1],cachedChunks:[null,null],offsets:[0,1272,2360,3644,5149,6201,7372,8556,9762,11052,11908,12836,13656,14531,15548,16640,16970,17978,18896,19882,21036,22317,23427,24605,25816,27018,28211,29361,30561,31732,32910,34075,35169,36307,37463,38363,39321,40612,41793,42813,43683,44577,45619,46783,47881,49033,50303,51594,52918,54292,55652,56927,58189,59499,60594,61413,62218,63143,64082,65106,66319,67621,68808,70053,71410,72412,73554,74687,75946,77247,78432,79561,80770,81960,83e3,84210,85440,86655,87858,88838,90023,90924,92157,93544,94760,95765,96805,98027,99265,100321,101581,102782,103859,105093,106158,107255,108317,109508,110643,111565,112703,113837,115101,116165,117376,118384,119649,120738,121733,123093,124240,125407,126400,127607,128651,130085,131332,132338,133271,134544,135750,136845,138155,139581,141032,142624,144103,145432,146896,148348,149394,150693,151924,152913,153833,154898,156128,157422,158509,159774,160848,161922,163028,164260,165541,166674,167782,169060,170228,171199],sizes:[1272,1088,1284,1505,1052,1171,1184,1206,1290,856,928,820,875,1017,1092,330,1008,918,986,1154,1281,1110,1178,1211,1202,1193,1150,1200,1171,1178,1165,1094,1138,1156,900,958,1291,1181,1020,870,894,1042,1164,1098,1152,1270,1291,1324,1374,1360,1275,1262,1310,1095,819,805,925,939,1024,1213,1302,1187,1245,1357,1002,1142,1133,1259,1301,1185,1129,1209,1190,1040,1210,1230,1215,1203,980,1185,901,1233,1387,1216,1005,1040,1222,1238,1056,1260,1201,1077,1234,1065,1097,1062,1191,1135,922,1138,1134,1264,1064,1211,1008,1265,1089,995,1360,1147,1167,993,1207,1044,1434,1247,1006,933,1273,1206,1095,1310,1426,1451,1592,1479,1329,1464,1452,1046,1299,1231,989,920,1065,1230,1294,1087,1265,1074,1074,1106,1232,1281,1133,1108,1278,1168,971,616],successes:[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]};compressedData["data"]=byteArray;assert(typeof Module.LZ4==="object","LZ4 not present - was your app build with  -s LZ4=1  ?");Module.LZ4.loadPackage({metadata:metadata,compressedData:compressedData},true);Module["removeRunDependency"]("datafile_py.data")}Module["addRunDependency"]("datafile_py.data");if(!Module.preloadResults)Module.preloadResults={};Module.preloadResults[PACKAGE_NAME]={fromCache:false};if(fetched){processPackageData(fetched);fetched=null}else{fetchedCallback=processPackageData}}if(Module["calledRun"]){runWithFS()}else{if(!Module["preRun"])Module["preRun"]=[];Module["preRun"].push(runWithFS)}};loadPackage({files:[{filename:"/lib/python3.8/site-packages/py/__metainfo.py",start:0,end:55,audio:0},{filename:"/lib/python3.8/site-packages/py/_version.py",start:55,end:197,audio:0},{filename:"/lib/python3.8/site-packages/py/_builtin.py",start:197,end:4218,audio:0},{filename:"/lib/python3.8/site-packages/py/test.py",start:4218,end:4440,audio:0},{filename:"/lib/python3.8/site-packages/py/_xmlgen.py",start:4440,end:12804,audio:0},{filename:"/lib/python3.8/site-packages/py/_std.py",start:12804,end:13472,audio:0},{filename:"/lib/python3.8/site-packages/py/_error.py",start:13472,end:16389,audio:0},{filename:"/lib/python3.8/site-packages/py/__init__.py",start:16389,end:22411,audio:0},{filename:"/lib/python3.8/site-packages/py/__init__.pyi",start:22411,end:22752,audio:0},{filename:"/lib/python3.8/site-packages/py/error.pyi",start:22752,end:26161,audio:0},{filename:"/lib/python3.8/site-packages/py/iniconfig.pyi",start:26161,end:27507,audio:0},{filename:"/lib/python3.8/site-packages/py/io.pyi",start:27507,end:32784,audio:0},{filename:"/lib/python3.8/site-packages/py/path.pyi",start:32784,end:39952,audio:0},{filename:"/lib/python3.8/site-packages/py/py.typed",start:39952,end:39952,audio:0},{filename:"/lib/python3.8/site-packages/py/xml.pyi",start:39952,end:40739,audio:0},{filename:"/lib/python3.8/site-packages/py/_process/cmdexec.py",start:40739,end:42553,audio:0},{filename:"/lib/python3.8/site-packages/py/_process/forkedfunc.py",start:42553,end:46245,audio:0},{filename:"/lib/python3.8/site-packages/py/_process/killproc.py",start:46245,end:46893,audio:0},{filename:"/lib/python3.8/site-packages/py/_process/__init__.py",start:46893,end:46933,audio:0},{filename:"/lib/python3.8/site-packages/py/_code/code.py",start:46933,end:74425,audio:0},{filename:"/lib/python3.8/site-packages/py/_code/_assertionnew.py",start:74425,end:85875,audio:0},{filename:"/lib/python3.8/site-packages/py/_code/source.py",start:85875,end:99925,audio:0},{filename:"/lib/python3.8/site-packages/py/_code/_py2traceback.py",start:99925,end:102690,audio:0},{filename:"/lib/python3.8/site-packages/py/_code/assertion.py",start:102690,end:105864,audio:0},{filename:"/lib/python3.8/site-packages/py/_code/__init__.py",start:105864,end:105910,audio:0},{filename:"/lib/python3.8/site-packages/py/_code/_assertionold.py",start:105910,end:123779,audio:0},{filename:"/lib/python3.8/site-packages/py/_path/cacheutil.py",start:123779,end:127112,audio:0},{filename:"/lib/python3.8/site-packages/py/_path/svnwc.py",start:127112,end:170937,audio:0},{filename:"/lib/python3.8/site-packages/py/_path/common.py",start:170937,end:185755,audio:0},{filename:"/lib/python3.8/site-packages/py/_path/local.py",start:185755,end:222514,audio:0},{filename:"/lib/python3.8/site-packages/py/_path/__init__.py",start:222514,end:222546,audio:0},{filename:"/lib/python3.8/site-packages/py/_path/svnurl.py",start:222546,end:237261,audio:0},{filename:"/lib/python3.8/site-packages/py/_vendored_packages/iniconfig.py",start:237261,end:242469,audio:0},{filename:"/lib/python3.8/site-packages/py/_vendored_packages/apipkg.py",start:242469,end:248889,audio:0},{filename:"/lib/python3.8/site-packages/py/_vendored_packages/__init__.py",start:248889,end:248889,audio:0},{filename:"/lib/python3.8/site-packages/py/_vendored_packages/apipkg-1.4.dist-info/DESCRIPTION.rst",start:248889,end:251692,audio:0},{filename:"/lib/python3.8/site-packages/py/_vendored_packages/apipkg-1.4.dist-info/INSTALLER",start:251692,end:251696,audio:0},{filename:"/lib/python3.8/site-packages/py/_vendored_packages/apipkg-1.4.dist-info/METADATA",start:251696,end:255187,audio:0},{filename:"/lib/python3.8/site-packages/py/_vendored_packages/apipkg-1.4.dist-info/RECORD",start:255187,end:255851,audio:0},{filename:"/lib/python3.8/site-packages/py/_vendored_packages/apipkg-1.4.dist-info/WHEEL",start:255851,end:255961,audio:0},{filename:"/lib/python3.8/site-packages/py/_vendored_packages/apipkg-1.4.dist-info/metadata.json",start:255961,end:256740,audio:0},{filename:"/lib/python3.8/site-packages/py/_vendored_packages/apipkg-1.4.dist-info/top_level.txt",start:256740,end:256747,audio:0},{filename:"/lib/python3.8/site-packages/py/_vendored_packages/iniconfig-1.0.0.dist-info/DESCRIPTION.rst",start:256747,end:258269,audio:0},{filename:"/lib/python3.8/site-packages/py/_vendored_packages/iniconfig-1.0.0.dist-info/INSTALLER",start:258269,end:258273,audio:0},{filename:"/lib/python3.8/site-packages/py/_vendored_packages/iniconfig-1.0.0.dist-info/METADATA",start:258273,end:260678,audio:0},{filename:"/lib/python3.8/site-packages/py/_vendored_packages/iniconfig-1.0.0.dist-info/RECORD",start:260678,end:261383,audio:0},{filename:"/lib/python3.8/site-packages/py/_vendored_packages/iniconfig-1.0.0.dist-info/WHEEL",start:261383,end:261479,audio:0},{filename:"/lib/python3.8/site-packages/py/_vendored_packages/iniconfig-1.0.0.dist-info/metadata.json",start:261479,end:262429,audio:0},{filename:"/lib/python3.8/site-packages/py/_vendored_packages/iniconfig-1.0.0.dist-info/top_level.txt",start:262429,end:262439,audio:0},{filename:"/lib/python3.8/site-packages/py/_io/terminalwriter.py",start:262439,end:277099,audio:0},{filename:"/lib/python3.8/site-packages/py/_io/saferepr.py",start:277099,end:279582,audio:0},{filename:"/lib/python3.8/site-packages/py/_io/capture.py",start:279582,end:291234,audio:0},{filename:"/lib/python3.8/site-packages/py/_io/__init__.py",start:291234,end:291263,audio:0},{filename:"/lib/python3.8/site-packages/py/_log/warning.py",start:291263,end:293828,audio:0},{filename:"/lib/python3.8/site-packages/py/_log/__init__.py",start:293828,end:293902,audio:0},{filename:"/lib/python3.8/site-packages/py/_log/log.py",start:293902,end:299905,audio:0},{filename:"/lib/python3.8/site-packages/py-1.9.0-py3.8.egg-info/PKG-INFO",start:299905,end:302974,audio:0},{filename:"/lib/python3.8/site-packages/py-1.9.0-py3.8.egg-info/dependency_links.txt",start:302974,end:302975,audio:0},{filename:"/lib/python3.8/site-packages/py-1.9.0-py3.8.egg-info/top_level.txt",start:302975,end:302978,audio:0},{filename:"/lib/python3.8/site-packages/py-1.9.0-py3.8.egg-info/not-zip-safe",start:302978,end:302979,audio:0},{filename:"/lib/python3.8/site-packages/py-1.9.0-py3.8.egg-info/SOURCES.txt",start:302979,end:306691,audio:0}],remote_package_size:175911,package_uuid:"d32bd385-420f-4a1e-86f0-5f30dc9943c9"})})();