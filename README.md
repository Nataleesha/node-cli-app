# CLI app

Command line program that parses JSON file and returns result depending on command provided via command line arguments.

## Installation

```bash
npm install
```

## Usage

### Return list of contacts

```bash
node index.js --action="list"
```

[Example](https://api.monosnap.com/file/download?id=bYuQcDiKxIEQMwBnnhE14ATaNDsj1b)

### Get contact by id

```bash
node index.js --action="get" --id 05olLMgyVQdWRwgKfg5J6
```

[Example](https://api.monosnap.com/file/download?id=Cuso77NF8mfDTuLulEk0nceTRgp7D1)

### Add contact

```bash
node index.js --action="add" --name Mango --email mango@gmail.com --phone 322-22-22
```

[Example](https://api.monosnap.com/file/download?id=ZJf0G6wFvxbmISqyXy0Zr0cf6j7xRD)

### Remove contact

```bash
node index.js --action="remove" --id qdggE76Jtbfd9eWJHrssH
```

[Example](https://api.monosnap.com/file/download?id=VHv7TMqTGfjf5gAwSjVXnxNFv6pdTq)
