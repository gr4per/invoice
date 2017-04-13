# invoice service

For further information on how to create, configure, document and access this service, please have a close look at the [Service Template](https://github.com/OpusCapitaBusinessNetwork/service-template/blob/master/README.md) this service is made with.

# Deployment

## Development (Swarm)
```
docker service create --name invoice --log-driver gelf --log-opt gelf-address=udp://10.0.0.12:12201 --log-opt tag="invoice" --publish mode=host,target=3003,published=3003 --env SERVICE_3003_NAME=invoice --env SERVICE_3003_CHECK_HTTP=/api/invoices --env SERVICE_3003_CHECK_INTERVAL=15s --env SERVICE_3003_CHECK_TIMEOUT=3s --host consul:172.17.0.1 ocbesbn/invoice:dev
```
