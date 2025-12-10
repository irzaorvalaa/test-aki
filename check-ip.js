const os = require("os");

function getLocalIP() {
  const interfaces = os.networkInterfaces();

  console.log("\n🌐 Your IP Addresses:\n");

  for (const name of Object.keys(interfaces)) {
    for (const iface of interfaces[name]) {
      // Skip internal (loopback) and non-IPv4
      if (iface.family === "IPv4" && !iface.internal) {
        console.log(`   ${name}: ${iface.address}`);
      }
    }
  }

  console.log("\n📱 Access from phone: http://[IP-ADDRESS]:3000\n");
}

getLocalIP();
