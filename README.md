# URL Shortener

A simple URL shortener built with Node.js, Express, MongoDB, and Mongoose. It shortens long URLs and redirects users to the original URL when visiting the shortened link.

## Features

- Shorten any valid URL.
- Redirect users to the original URL when visiting the shortened link.
- Uses MongoDB for storing the URLs.
- Generates unique codes using `shortid`.

## Technologies Used

- Node.js
- Express.js
- MongoDB (Mongoose)
- shortid (for unique URL codes)
- valid-url (for URL validation)

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/en/) installed on your system.
- [MongoDB](https://www.mongodb.com/) set up (either local or cloud like MongoDB Atlas).
  
### Installation

1. Clone the repository:

    ```bash
    git clone https://github.com/yourusername/url-shortener.git
    ```

2. Navigate to the project directory:

    ```bash
    cd url-shortener
    ```

3. Install the required dependencies:

    ```bash
    npm install
    ```

4. Create a `.env` file in the root directory and add the following environment variables:

    ```bash
    MONGO_URI=mongodb+srv://<username>:<password>@cluster.mongodb.net/<dbname>?retryWrites=true&w=majority
    BASE_URL=http://localhost:5000
    PORT=5000
    ```

5. Start the server:

    ```bash
    npm start
    ```

### Usage

1. To shorten a URL, make a `POST` request to `/api/url/shorten` with the following JSON payload:

    ```json
    {
      "longUrl": "https://www.example.com"
    }
    ```

    Example using `curl`:

    ```bash
    curl --request POST \
      --url http://localhost:5000/api/url/shorten \
      --header 'Content-Type: application/json' \
      --data '{
        "longUrl": "https://www.example.com"
      }'
    ```

    The response will contain the shortened URL.

2. To redirect to the original URL, simply visit the shortened URL in your browser:

    ```
    http://localhost:5000/<urlCode>
    ```

### Folder Structure

```
url-shortener/
│
├── .env                 # Environment variables
├── server.js            # Main server file
├── models/
│   └── Url.js           # Mongoose URL model
├── routes/
│   └── url.js           # URL shortening and redirection routes
└── config/
    └── db.js            # MongoDB connection file
```

### Endpoints

- `POST /api/url/shorten`: Shorten a long URL. Requires a valid `longUrl` in the request body.
- `GET /:code`: Redirect to the original URL based on the shortened URL code.

### Example

Shorten a URL:

```bash
curl --request POST \
  --url http://localhost:5000/api/url/shorten \
  --header 'Content-Type: application/json' \
  --data '{
    "longUrl": "https://www.google.com"
  }'
```

Response:

```json
{
  "_id": "60c72b2f4f1a4e281c4e978b",
  "urlCode": "XyZ123",
  "longUrl": "https://www.google.com",
  "shortUrl": "http://localhost:5000/XyZ123",
  "date": "2024-10-12T12:00:00.000Z"
}
```

Redirect by visiting:

```
http://localhost:5000/XyZ123
```

### License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
