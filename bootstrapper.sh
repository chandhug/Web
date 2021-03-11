dns_host=$(cat /etc/resolv.conf |grep nameserver|awk '{print $2}')
docker build --network=host --build-arg target_environment=${TARGET_ENVIRONMENT} --build-arg target_app=${TARGET_APP} .
