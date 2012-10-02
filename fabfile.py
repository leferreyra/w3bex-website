from fabric.api import *

env.hosts = ['root@w3bex.com:4190']
remote_path = "/home/w3bex/w3bex"

def deploy():
    local("git add -p && git commit");
    local("git push origin master")
    cd(remote_path)
    run("git pull origin master")
    
