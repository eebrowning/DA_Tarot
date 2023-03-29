module.exports = {
    apps: [{
        name: "frontend",
        script: "index.html",
        cwd: "/home/ec2-user/DA_Tarot/frontend/build",
  	env: {
    	    "NODE_ENV": "production",
    	    "PORT": "3000",
    	    "HOST": "0.0.0.0"
  	}
    }]
}
