tmuxp web
=========

web widget for building tmux workspaces, for use inside of `tmuxp`_
documentation.

- Livereload
- Simple express server

.. _tmuxp: https://www.github.com/tony/tmuxp

develop environment
-------------------

Requisites: `nodejs`_ + `bower`_ node package

Install bower globally:

.. code-block:: bash

    $ sudo npm install -g bower

Clone repository and install dependencies.

.. code-block:: bash

    $ git clone --recursive https://github.com/tony/tmuxp-web.git
    $ npm install

    (the next 3 commands run automatically, in case not):
    $ cd ./app
    $ bower install
    $ cd ../

Start dev server + client builder (inside project root):

.. code-block:: bash

    $ grunt

project layout
--------------

=================== ======================================================
./app/
 - app.js           app widget (`AMD`_ format)
 - bower.js         `bower`_ package list
 - vendor/bootstrap
./server/           local test server files
  - app.js          simple `express`_ http server for previewing the app
./Gruntfile.js      `Gruntfile`_ for local server + requirejs + less 
                    building.
./package.json      `package.json`_ document. list dependencies to be
                    downloaded with ``$ npm install`` is ran.
=================== ======================================================

.. _nodejs: http://nodejs.org/
.. _bower: http://bower.io/
.. _express: http://expressjs.com/
.. _Gruntfile: http://gruntjs.com/getting-started
.. _package.json: https://npmjs.org/doc/json.html
.. _AMD: http://requirejs.org/docs/whyamd.html
