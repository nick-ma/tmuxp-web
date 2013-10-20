tmuxp web
=========

web widget for building tmux workspaces, to be used as a drop-in place
application inside of `tmuxp`_ documentation.

.. _tmuxp: https://www.github.com/tony/tmuxp

develop environment
-------------------

Requisites: nodejs + bower

.. code-block:: bash

    $ sudo npm install -g bower

.. code-block:: bash

    $ git clone --recursive https://github.com/tony/tmuxp-web.git
    $ cd ./tmuxp-web
    $ npm install
    $ cd ./client
    $ npm install
    $ bower install
