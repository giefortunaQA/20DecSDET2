# Car API

## Access the Swagger Documentation

```url
http://localhost:9092/swagger-ui/index.html
```

## Access the H2

```url
http://localhost:9092/h2-console/

JDBC URL:jdbc:h2:mem:testdb
```

### POST - Create a new car

```json
{
    "name":"Vinesh",
    "make":"Honda",
    "model":"Accord",
    "doors":5,
    "colour":"Red",
    "garage":{
        "id":2
    }
}

```

### POST - Create a new garage

```json
{
    "name":"London"
}
```
