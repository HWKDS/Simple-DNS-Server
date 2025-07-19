# Simple DNS Server

simple DNS server


## Installation


```bash
git clone https://github.com/HWKDS/Simple-DNS-Server.git
cd Simple-DNS-Server
npm install
sudo systemctl start mongod
```

## Database Setup

```javascript
  { domain: "example.com", ip: "192.168.1.1" },
  { domain: "google.com", ip: "8.8.8.8" },
  { domain: "localhost", ip: "127.0.0.1" }
```

### Run the server
```bash
node server.js
node client.js(diff terminal)
```