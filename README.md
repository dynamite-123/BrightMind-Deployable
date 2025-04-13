## 🚀 Running the Frontend (Next.js)

To start the frontend locally, follow these steps:

1. Open your terminal and navigate to the `frontend` directory:
    ```bash
    cd frontend
    ```

2. Install the project dependencies (only required once):
    ```bash
    npm install
    ```

3. Start the development server:
    ```bash
    npm run dev
    ```

The frontend will be running at [http://localhost:3000](http://localhost:3000) by default.  
Next.js supports **hot reloading**, so any changes you make in the code will instantly reflect in the browser.

## Running the Backend (Django)


1. Open your terminal and navigate to the `backend` directory to create a virtual environment:
    ```bash
    python -m venv venv
    ```
2. Activate venv:
    ```bash
    venv\Scripts\activate
    ```
3. Install dependencies
    ```bash
    pip install -r requirements.txt
    ```
4. Run the backend server
   ```bash
   python manage.py runserver
   ```
Note:
Before you run the server the first time, run these two commands:
    ```bash
    python manage.py makemigrations
    python manage.py migrate
    ```
The backend will be running at port 8000 by default.  