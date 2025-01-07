# JWT 기반 인증 구현 시 보안강화를 위해 클라이언트 IP와 device 추가
- [JWT(JSON Web Token)기반 인증 및 권한관리 구현시 보안강화를 위한 방안 문의](https://wiki.wikisecurity.net/faq:jwt-3)
- JWT 기반 인증 구현 시 보안강화를 위해 <b>클라이언트의 IP, 지문, HTTP 헤더 (User-Agent), 쿠키 및 세션, 시간대, 지리적 위치 등</b>을 활용할 수 있음.
- 이 중 구현이 간단한 <b>IP</b>와 <b>User-Agent(브라우저, 운영체제, 장치 정보)</b>를 활용하기로 함.

---

## 로그인
<b>POST</b> `/sign-in`

```
{
  "token": "sldkflskdflsdkfsldkf"
}
```

![로그인시연](https://github.com/user-attachments/assets/72652660-5be4-4358-a49b-9edcc20f0676)

---

## 로그인 후 접속
<b>GET</b> `/protected`

```
{
  "message": "로그인한 사용자입니다",
  "user": {
    "id": 1,
    "username": "mockUser1",
    "clientIp": "::ffff:127.0.0.1",
    "clientDevice": "Thunder Client (https://www.thunderclient.com)"
  }
}
```

![접근시연](https://github.com/user-attachments/assets/26f9f747-259c-4ce4-a101-91f4f328f15f)

---

### 참고 링크
- [Request의 device 정보 (user-agent) 얻어내기](https://stackoverflow.com/questions/22285921/how-to-handle-user-agent-in-nodejs-environment)

- [mdn 공식문서 user-agent 정의](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/User-Agent)