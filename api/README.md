# @ByteBite

## Development

To develop in Django navigate to the `api` folder.

run [command](https://packaging.python.org/en/latest/tutorials/installing-packages/) to activate 
to activate the virual envirionment

Once the venv is running (and if we have requirements.txt) then use the [command](https://packaging.python.org/en/latest/tutorials/installing-packages/) to install the python dependancies. 

## Development Setup

When installing the tools needed for development see the [tools section](#tools) to see which versions to use.

* Install [Python](https://www.python.org/downloads/).

### Mac OS

* update [pip](https://packaging.python.org/en/latest/guides/installing-using-pip-and-virtual-environments/) using Python3.
  - `python3 -m pip install --user --upgrade pip`

* Install [venv](https://packaging.python.org/en/latest/guides/installing-using-pip-and-virtual-environments/) using Python3 and pip.
  - `python3 -m pip install --user virtualenv`

### Windows

* update [pip](https://packaging.python.org/en/latest/guides/installing-using-pip-and-virtual-environments/) using Python3.
  - `py -m pip install --upgrade pip`

* Install [venv](https://packaging.python.org/en/latest/guides/installing-using-pip-and-virtual-environments/) using Python3 and pip.
  - `py -m pip install --user virtualenv`

--------------------------------------------------------
  ### After Installation of Tools
* Change directories into the root of this repository (`bytebite-api/`).

## Scripts

* `python3 manage.py runserver`: Builds and runs `api` project.

## Tools

Here is a list of tools used to work on this repository.

| Tool                                   | Version |
|----------------------------------------|---------|
| [Python](https://www.python.org/)      | 3.11.5  |
| [pip](https://packaging.python.org/en/latest/guides/installing-using-pip-and-virtual-environments/)                                                   | 23.2.1  |
| [venv](https://packaging.python.org/en/latest/guides/installing-using-pip-and-virtual-environments/)                                                   | x.x.x |

## Requirements.txt

The requirements.txt file is a text file containing the python dependencies (imports) for the project. To add to it one of 2 things can be done:

1. Delete the file and re-scan entirely with the command : pip freeze > requirements.txt 
2. Add manually to the end of the text file, ex: Django==4.2.5

Python related errors can then be solved by running the "pip install -r requirements.txt" command, this should download all python dependencies. 
