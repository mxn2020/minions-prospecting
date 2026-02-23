"""
Minions Prospecting Python SDK

Web search configs, prospect discovery rules, and lead scoring criteria
"""

__version__ = "0.1.0"


def create_client(**kwargs):
    """Create a client for Minions Prospecting.

    Args:
        **kwargs: Configuration options.

    Returns:
        dict: Client configuration.
    """
    return {
        "version": __version__,
        **kwargs,
    }

from .schemas import *
