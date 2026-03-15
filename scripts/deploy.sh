cd /home/ec2-user/app

git pull origin main

npm install --production

pm2 restart mathapp || pm2 start bin/www --name mathapp