# config.py
# ============================================================
# This file READS environment variables from your .env file.
# Environment variables are the safe way to store secrets like
# database passwords, API keys, and JWT secrets.
#
# We use pydantic-settings to automatically read and validate
# all required variables on startup. If a required variable
# is missing, the app will fail immediately with a clear error
# (better than crashing randomly later!).
# ============================================================

from pydantic_settings import BaseSettings


class Settings(BaseSettings):
    """
    All configuration values are defined here as class attributes.
    pydantic-settings automatically reads them from environment variables
    or from a .env file.
    """

    # --- App Info ---
    APP_NAME: str = "SkillForge AI"
    APP_VERSION: str = "0.1.0"
    DEBUG: bool = True  # Set to False in production!

    # --- Database ---
    # Format: postgresql://username:password@host:port/database_name
    # This value MUST be in your .env file. There is no default
    # because a real DB URL is always environment-specific.
    DATABASE_URL: str = "postgresql://user:password@localhost:5432/skillforge_db"

    # --- Security ---
    # Used to sign and verify JWT tokens. Must be a long random string.
    # Generate one with: python -c "import secrets; print(secrets.token_hex(32))"
    SECRET_KEY: str = "CHANGE_ME_IN_DOT_ENV_FILE"

    # Algorithm used to encode JWT tokens
    JWT_ALGORITHM: str = "HS256"

    # How long a login token stays valid (in minutes)
    ACCESS_TOKEN_EXPIRE_MINUTES: int = 60

    # --- AI / LLM API (Phase 4) ---
    # Your OpenAI or compatible LLM API key. Leave empty until Phase 4.
    LLM_API_KEY: str = ""
    LLM_API_BASE_URL: str = "https://api.openai.com/v1"
    LLM_MODEL: str = "gpt-4o-mini"

    # --- CORS (Cross-Origin Resource Sharing) ---
    # These are the URLs allowed to call your API from a browser.
    # In development, this is your Vite frontend.
    ALLOWED_ORIGINS: list = ["http://localhost:5173", "http://localhost:3000"]

    class Config:
        # Tell pydantic-settings to read from a .env file
        env_file = ".env"
        # Case-insensitive matching (DATABASE_URL or database_url both work)
        case_sensitive = False


# Create a single global instance of Settings.
# Import this in other files like: from app.config import settings
settings = Settings()
