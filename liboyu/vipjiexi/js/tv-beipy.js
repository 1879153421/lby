//play����¼�
function play() {
	var rul = document.getElementById("url").value; //��ȡinput����
	if(rul == "") {
		alert("���������ʾ�������������ӣ�û�����Ҹ��������ë��")
	} else {
		var jxApi = document.getElementById("jk"); //��ȡѡ��ť
		var jxurl = document.getElementById("jk").selectedIndex; //��ȡѡ�е�
		var jkv = jxApi.options[jxurl].value; //��ȡѡ��ӿ�����
		var paly = document.getElementById("palybox"); //��ȡ���Ŵ���λ��
		paly.src = jkv + rul; //�ӿڸ�ֵ
		//ajax���ݴ���
		var tittext = document.getElementById("tittext");
		//1,create ajax���Ķ���
		var xhr = getxhr();
		//2,��post�ķ�ʽ��������������ӣ�
		xhr.open("post", "data/title.php", true);
		xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
		//3,����һ��http����:
		xhr.send("titurl=" + rul);
		console.log(xhr.readyState);
		//��ȡ������״̬��
		xhr.onreadystatechange = function() {
			console.log(xhr.readyState)
			console.log(xhr.status)
			if(xhr.readyState == 4 && xhr.status == 200) {
				tittext.innerHTML = xhr.responseText; //��ȡ��������Ӧ����
			}
		}

		function getxhr() {
			var xhr = null;
			if(window.XMLHttpRequest) {
				xhr = new XMLHttpRequest();
			} else {
				xhr = new ActiveXObject("Microsoft.XMLHttp");
			}
			return xhr;
		}
	}
}