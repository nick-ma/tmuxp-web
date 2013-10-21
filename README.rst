tmuxp web
=========

drop-in webapp for creating tmuxp configurations in yaml, for use inside
of `tmuxp`_ documentation.

- Livereload
- Simple express server
- Modular `twitter bootstrap`_ and user-defined variables.

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

Launch the development environment in `tmuxp`_ (requires ``tmux`` >= 1.8):

    $ pip install -e tmuxp
    $ tmuxp .

project layout
--------------

=================== ======================================================
./app/
 - app.js           app widget (`AMD`_ format)
 - bower.js         `bower`_ package list
 - less/
   - bootstrap.less +/- sections of bootstrap
   - variables.less +/-/change variables for building bootstrap
 - vendor/bootstrap `twitter bootstrap`
./server/           local test server files
  - app.js          simple `express`_ http server for previewing the app
./Gruntfile.js      `Gruntfile`_ for local server + requirejs + less 
                    building.
./package.json      `package.json`_ document. list dependencies to be
                    downloaded with ``$ npm install`` is ran.
./media/
  - css/app.css     css build file
  - js/app.js       js app build file
=================== ======================================================

.. _nodejs: http://nodejs.org/
.. _bower: http://bower.io/
.. _express: http://expressjs.com/
.. _Gruntfile: http://gruntjs.com/getting-started
.. _package.json: https://npmjs.org/doc/json.html
.. _AMD: http://requirejs.org/docs/whyamd.html
.. _twitter bootstrap: http://getbootstrap.com/
.. _tmuxp: https://www.github.com/tony/tmuxp
