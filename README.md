<a name="readme-top"></a>

<div align="center">
  <h3><b>Producer Web App</b></h3>

</div>


# 📗 Table of Contents

- [📖 About the Project](#about-project)
  - [🛠 Built With](#built-with)
    - [Tech Stack](#tech-stack)
    - [Key Features](#key-features)
  - [🚀 Live Demo](#live-demo)
- [💻 Getting Started](#getting-started)
  - [Setup](#setup)
  - [Prerequisites](#prerequisites)
  - [Install](#install)
  - [Usage](#usage)
  - [Run tests](#run-tests)
  - [Deployment](#deployment)
- [👥 Authors](#authors)
- [🔭 Future Features](#future-features)
- [🤝 Contributing](#contributing)
- [⭐️ Show your support](#support)
- [🙏 Acknowledgements](#acknowledgements)
- [❓ FAQ (OPTIONAL)](#faq)
- [📝 License](#license)

# 📖 [Producer Web App] <a name="about-project"></a>

**Producer Web App** is a project for a company that requires a company website where it can login to manage its data, show information about the company and, also to showcase its past, current and future projects, sell tickets, show availability in events, with more function to be added.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## 🛠 Built With <a name="built-with"></a>

### Tech Stack <a name="tech-stack"></a>

<details>
  <summary>Client</summary>
  <ul>
    <li><a href="https://www.w3.org/TR/2011/WD-html5-20110405/">HTML5</a></li>
    <li><a href="https://www.w3.org/Style/CSS/specs.en.html">CSS</a></li>
    <li><a href="https://www.ecma-international.org/publications-and-standards/standards/ecma-262/">JavaScript</a></li>
    <li><a href="#">Python</a></li>
  </ul>
</details>
<details>
  <summary>Framework</summary>
  <ul>
    <li><a href="#">Django</a></li>
  </ul>
</details>
<details>
  <summary>Database</summary>
  <ul>
    <li><a href="#">DB SQlite3</a></li>
  </ul>
</details>

### Key Features <a name="key-features"></a>

- **Lading Page for activities**
- **Mobile first development**
- **Responsiveness and flexibility for any screen size**
- **Fast access to social media and other ways of contact**
- **Easy to the eyes and cultivating at the same time**
- **Capability to Play and Plug with DB**
- **Dinamic creation of content** 

## 🚀 Live Demo <a name="live-demo"></a>

No live demo available, yet.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## 💻 Getting Started <a name="getting-started"></a>


To get a local copy up and running, follow these steps.

### Prerequisites

In order to run this project you need:
To clone or fork and run it in a browser

### Setup


To get this project up and running locally on your computer:

1. Set up the [Python development environment](https://developer.mozilla.org/en-US/docs/Learn/Server-side/Django/development_environment).
   We recommend using a Python virtual environment.
   > **Note:** This has been tested against Django 3.11.1 (and may not work or be "optimal" for other versions).

Clone this repository to your desired folder where the virtual enviroment is applied:

For example, using Ubuntu:

```sh
  cd my-desired-folder
  git clone git@github.com:lordksix/producer-wesite.git
```

For more information on how to clone or fork a repository:
- <a href="https://docs.github.com/en/repositories/creating-and-managing-repositories/cloning-a-repository">How to clone a repo</a>
- <a href="https://docs.github.com/en/get-started/quickstart/fork-a-repo">How to fork a repo</a>

### Install

Assuming you have Python setup, run the following commands (if you're on Windows you may use `py` or `py -3` instead of `python` to start Python):
   ```
   pip3 install -r requirements.txt
   python3 manage.py makemigrations
   python3 manage.py migrate
   python3 manage.py collectstatic
   python3 manage.py test # Run the standard tests. These should all pass.
   python3 manage.py createsuperuser # Create a superuser
   ```

### Usage

To run the project, the following command has to be followed inside the project producerApp folder.

```
  python3 manage.py makemigrations
  python3 manage.py migrate
  python3 manage.py runserver
```

1. Open a browser to `http://127.0.0.1:8000/admin/` to open the admin site
1. Create a few test objects of each type.
1. Open tab to `http://127.0.0.1:8000` to see the main site, with your new objects.

### Run tests

There are no test available for this project.

### Deployment

To deploy this project, use any web hosting service.

This project is not deployed yet. 

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## 👥 Authors <a name="authors"></a>

👤 **Author**

- GitHub: [@lordksix](https://github.com/lordksix)
- Twitter: [@wapasquel](https://github.com/lordksix)

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## 🔭 Future Features <a name="future-features"></a>

Future changes:

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## 🤝 Contributing <a name="contributing"></a>

Contributions, issues, and feature requests are welcome!

Feel free to check the [issues page](../../issues/).

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## ⭐️ Show your support <a name="support"></a>

If you like this project, I encourage you to clone, fork and contribute. Our community and knowledge grows with each engagement.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## 🙏 Acknowledgments <a name="acknowledgements"></a>

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## ❓ FAQ <a name="faq"></a>

- **Do I need a IDE or a special text editor to make changes?**

  - No, you don't. You can use NotePad to make changes.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## 📝 License <a name="license"></a>

This project is [GNU GENERAL PUBLIC LICENSE V3](./LICENSE) licensed.


<p align="right">(<a href="#readme-top">back to top</a>)</p>
