<h1>Flask Dynamic Form Project</h1>
    <p>Flask-приложение с динамической формой, сохранением данных в PostgreSQL (JSONB) и отображением сохраненных данных.</p>

  <h2>Требования</h2>
    <ul>
        <li>Ubuntu 24.04+</li>
        <li>Python 3.10+</li>
        <li>PostgreSQL</li>
        <li>Nginx</li>
        <li>Gunicorn</li>
    </ul>

  <h2>Установка и развертывание</h2>
    <ol>
        <li>
            <strong>Клонируйте репозиторий</strong>:
            <pre><code>git clone &lt;repository_url&gt;
cd flask_project</code></pre>
        </li>
        <li>
            <strong>Настройте виртуальное окружение</strong>:
            <pre><code>python3 -m venv venv
source venv/bin/activate
pip install -r requirements.txt</code></pre>
        </li>
        <li>
            <strong>Настройте PostgreSQL</strong>:
            <pre><code>sudo -u postgres psql
CREATE DATABASE flask_app;
CREATE USER flask_user WITH PASSWORD 'secure_password';
ALTER ROLE flask_user SET client_encoding TO 'utf8';
ALTER ROLE flask_user SET default_transaction_isolation TO 'read committed';
ALTER ROLE flask_user SET timezone TO 'UTC';
GRANT ALL PRIVILEGES ON DATABASE flask_app TO flask_user;
\q</code></pre>
        </li>
        <li>
            <strong>Инициализируйте базу данных</strong>:
            <pre><code>python run.py</code></pre>
        </li>
        <li>
            <strong>Настройте Gunicorn</strong>:
            <ul>
                <li>Скопируйте <code>gunicorn.service</code> в <code>/etc/systemd/system/</code>:
                    <pre><code>sudo cp gunicorn.service /etc/systemd/system/</code></pre>
                </li>
                <li>Замените <code>your_username</code> и <code>/path/to/flask_project</code> на актуальные значения.</li>
                <li>Активируйте сервис:
                    <pre><code>sudo systemctl start gunicorn
sudo systemctl enable gunicorn</code></pre>
                </li>
            </ul>
        </li>
        <li>
            <strong>Настройте Nginx</strong>:
            <ul>
                <li>Скопируйте <code>nginx.conf</code> в <code>/etc/nginx/sites-available/flask_app</code>:
                    <pre><code>sudo cp nginx.conf /etc/nginx/sites-available/flask_app</code></pre>
                </li>
                <li>Создайте символическую ссылку:
                    <pre><code>sudo ln -s /etc/nginx/sites-available/flask_app /etc/nginx/sites-enabled/</code></pre>
                </li>
                <li>Проверьте конфигурацию и перезапустите Nginx:
                    <pre><code>sudo nginx -t
sudo service nginx restart</code></pre>
                </li>
            </ul>
        </li>
        <li>
            <strong>Проверка</strong>:
            <p>Откройте браузер и перейдите по адресу <code>http://localhost</code>.</p>
            <p>Добавляйте инпуты, отправляйте форму и проверяйте данные на <code>/view_data</code>.</p>
        </li>
    </ol>

  <h2>Структура проекта</h2>
    <ul>
        <li><code>app/</code>: Основной код приложения.</li>
        <li><code>templates/</code>: HTML-шаблоны.</li>
        <li><code>static/</code>: Статические файлы (JS).</li>
        <li><code>config.py</code>: Конфигурация.</li>
        <li><code>run.py</code>: Запуск приложения.</li>
        <li><code>requirements.txt</code>: Зависимости.</li>
        <li><code>nginx.conf</code>: Конфигурация Nginx.</li>
        <li><code>gunicorn.service</code>: Конфигурация Gunicorn.</li>
    </ul>
