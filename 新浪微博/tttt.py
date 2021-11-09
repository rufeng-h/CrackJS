import json
import time

s = """<script>
try{sinaSSOController.setCrossDomainUrlList({"retcode":0,"arrURL":["https:\/\/passport.weibo.com\/wbsso\/login?ticket=ST-NTY4MDU5NzgxMQ%3D%3D-1636459922-gz-39A9CAFEA326565442B892D13ABC0379-1&ssosavestate=1667995922","https:\/\/passport.krcom.cn\/sso\/crossdomain?service=krvideo&savestate=1&ticket=ST-NTY4MDU5NzgxMQ%3D%3D-1636459922-gz-54A47704BE5393C8B1873076FC310A0A-1&ssosavestate=1667995922","https:\/\/passport.sina.cn\/sso\/crossdomain?action=login&savestate=1&ticket=ST-NTY4MDU5NzgxMQ%3D%3D-1636459922-gz-B59B31D8D6416D64AEC80B8B310013A4-1","https:\/\/passport.weibo.cn\/sso\/crossdomain?action=login&savestate=1&ticket=ST-NTY4MDU5NzgxMQ%3D%3D-1636459922-gz-2C4AA809A261FAAE48D58DADAD5CF537-1"]});}
		catch(e){
			var msg = e.message;
			var img = new Image();
			var type = 1;
			img.src = 'https://login.sina.com.cn/sso/debuglog?msg=' + msg +'&type=' + type;
		}try{sinaSSOController.crossDomainAction('login',function(){location.replace('https://passport.weibo.com/wbsso/login?ssosavestate=1667995922&url=https%3A%2F%2Fweibo.com%3Fsudaref%3Dpassport.weibo.com&display=0&ticket=ST-NTY4MDU5NzgxMQ==-1636459922-gz-46C2CF2511CE782538D87264CAB4477F-1&retcode=0');});}
		catch(e){
			var msg = e.message;
			var img = new Image();
			var type = 2;
			img.src = 'https://login.sina.com.cn/sso/debuglog?msg=' + msg +'&type=' + type;
		}
</script>
</body>
</html>"""

import re

