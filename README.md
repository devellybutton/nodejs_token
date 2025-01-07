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