import { IconsFontawesome } from "../../../globalVariables/icons";
import { paserDescription, translater } from "../helper";
import { CategoryLink, IProject, List, Topics } from "../types";

const myWebsite = (currentLanguagee: string): IProject => ({
    title: translater(currentLanguagee, { es: "Mi web", en: "My website" }),
    titleSeo: translater(currentLanguagee, { es: "senixcode_mi_web", en: "senixcode_my_website" }),
    summary: translater(currentLanguagee, {
        es: "Un proyecto personal que busca una buena experiencia de usuario, compartiendo experiencias y mejoras como programador",
        en: "A personal project that seeks a good user experience, sharing experiences and improvements as a programmer",
    }),
    description: paserDescription(translater(currentLanguagee, {
        es: `Comencé desde cero, creando mi logo y diseñando este web en figma, use trellor para organizarme hubieron muchos cambios de diseño y código.
             Tuve algunos inconveniente con mi api que estaba desplegado en Heroku tenia un delay de 20 segundos, tuve que tomar la dura decisión de no usar mi api, cuando tenga ingresos lo pondré en producción hare un desarrollo por aparte.
             Agregare blogs y eventualmente investigare sobre seo me gustaría que exista un botón de compartir, estoy muy entusiasmado de seguir aprendiendo.`,
        en: `I started from scratch, creating my logo and designing this web in figma, I used trellor to organize myself, there were a lot of design and code changes.
             I had some problems with my api that was deployed in Heroku had a delay of 20 seconds, I had to take the hard decision not to use my api, when I have income I will put it in production I will do a separate development.
             I will add blogs and eventually do some research on seo I would like there to be a share button, I am very excited to keep learning.`
    })),
    topic: [
        Topics.NEXT,
        Topics.TYPESCRIPT,
        Topics.VERCEL
    ],
    links: [
        {
            href: "https://res.cloudinary.com/ds5ayigjw/image/upload/v1619854251/my-website/senixcode-web-screen-aboutme.png",
            name: translater(currentLanguagee, { es: "imagen sobre mi", en: "image about me" }),
            category: CategoryLink.IMAGE
        },
        {
            href: "https://github.com/senixcode/my-website",
            name: translater(currentLanguagee, { es: "repositorio mi web", en: "repository my web" }),
            icon: IconsFontawesome.GITHUB,
            category: CategoryLink.ICON
        },
    ]

})

const myApi = (currentLanguagee: string): IProject => ({
    title: translater(currentLanguagee, { es: "Mi api", en: "My api" }),
    titleSeo: "senixcode_my_api",
    summary: translater(currentLanguagee, {
        es: "Es un proyecto personal para agregar dinámicamente cada proyecto, pronto autenticación con suscripciones para notificar proyectos nuevos y blogs interesantes sobre la programación",
        en: "It is a personal project to dynamically add each project, soon authentication with subscriptions to notify new projects and interesting blogs about programming.",
    }),
    description: paserDescription(translater(currentLanguagee, {
        es: `Actualmente este api no esta siendo usada, por el delay de 20 segundos que tenia a causa de usar Heroku, estaré desarrollando por aparte hasta contar con ingresos.
            Resumiré un poco de que cosas nuevas que tiene y tendrá uso de mongodb con graphql, autenticación con google, servicio de suscripciones.`,
        en: `Currently this api is not being used, because of the 20 seconds delay I had because of using Heroku, I will be developing separately until I have income.
            I will summarize a little of what new things it has and will have mongodb usage with graphql, authentication with google, subscription service.`
    })),
    topic: [
        Topics.NEST,
        Topics.TYPESCRIPT,
        Topics.GRAPHQL,
    ],
    links: [
        {
            href: "https://github.com/senixcode/api-my-website",
            name: translater(currentLanguagee, { es: "repositorio mi api", en: "repository my api" }),
            icon: IconsFontawesome.GITHUB,
            category: CategoryLink.ICON
        }
    ]

})

const myCms = (currentLanguagee: string): IProject => ({
    title: translater(currentLanguagee, { es: "Mi cms", en: "My cms" }),
    titleSeo: translater(currentLanguagee, { es: "senixcode_mi_cms", en: "senixcode_my_cms" }),
    summary: translater(currentLanguagee, {
        es: 'Es un proyecto personal para ayudarme a gestionar como un dashboar la data de mi api.',
        en: 'It is a personal project to help me to manage as a dashboar the data of my api.'
    }),
    description: paserDescription(translater(currentLanguagee, {
        es: `Este proyecto esta actualmente no esta siendo usada, por los nuevos cambios en mi api, también tendre que hacer un refactor del diseño.
             Tengo pensado hacer un diseño en figma y optimizar las renderizaciones que tengo también mostrare unas imágenes del estado actual.`,
        en: `This project is currently not being used, because of the new changes in my api, I will also have to make a refactor of the design.
             I plan to make a figma design and optimize the renderings I have, I will also show some images of the current state.`
    })),
    topic: [
        Topics.REACT,
        Topics.GRAPHQL,
        Topics.BOOTSWATCH
    ],
    links: [
        {
            href: "https://github.com/senixcode/cms-my-website",
            name: translater(currentLanguagee, { es: "repositorio mi cms", en: "repository my cms" }),
            icon: IconsFontawesome.GITHUB,
            category: CategoryLink.ICON
        }
    ]

})

const lightboxCustom = (currentLanguagee: string): IProject => ({
    title: "Lightbox",
    titleSeo: "senixcode_lightbox_custom",
    summary: translater(currentLanguagee, {
        es: 'Es un proyecto que requería para mi web, no encontré una librería, decidí realizar el proyecto por aparte que es una galería masonry de imágenes y videos, también muestra un modal con slider de imágenes hecho en react y typescript',
        en: 'It is a project that I needed for my website, I did not find a library, I decided to make the project separately which is a "masonry" gallery of images and videos, also shows a modal with slider all this done in react with typescript.'
    }),
    description: paserDescription(translater(currentLanguagee, {
        es: `Este proyecto fue inspirado en como muestra facebook las imagenes en un publicación.
             Requería que fuese un componente personalizable use codesandbox un editor online, use "useContext" para manejar lo que mostrara el modal, use transiciones, efectos zoom para que mostrara los items de la galería.
             Ordene los elementos con "masonry" sin librerías solo con css para una mejor apariencia al mostrar la galería, use la propiedad columns de css.
             Este proyecto fue divertido no soy un experto con css asi que puede aprender algunas cosas nuevas, en un futuro cercano  mejorare este proyecto y lo subiré a npm.`,
        en: `This project was inspired by how facebook displays images in a post.
             It needed to be a customizable component, I used codesandbox an online editor, I used "useContext" to manage what the modal would show, I used transitions, zoom effects to show the gallery items.
             I ordered the elements with "masonry" without libraries only with css for a better appearance when displaying the gallery, use the columns property of css.
             This project was fun, I am not an expert with css so I can learn some new things, in the near future I will improve this project and upload it to npm.`
    })),
    topic: [
        Topics.REACT,
        Topics.CSS,
    ],
    links: [
        {
            href: "https://github.com/senixcode/senixcode-lightbox-custom",
            name: translater(currentLanguagee, { es: "repositorio lightbox", en: "repository lightbox" }),
            icon: IconsFontawesome.GITHUB,
            category: CategoryLink.ICON
        },
        {
            href: "https://codesandbox.io/s/github/senixcode/gallery-custom-typescript",
            name: "codeSandbox lightbox",
            icon: IconsFontawesome.LINK,
            category: CategoryLink.ICON
        }
    ]

})

const cicularBarAnimation = (currentLanguagee: string): IProject => ({
    title: translater(currentLanguagee, { es: "Animación barra circular", en: "Circular bar animation" }),
    titleSeo: translater(currentLanguagee, { es: "senixcode_barra_circular_animado", en: "senixcode_cicular_bar_animation" }),
    summary: translater(currentLanguagee, {
        es: 'Fue una colaboración de un proyecto bancario en React Native, donde se requería una barra circular animada, según el porcentaje cambiaria de colores, decidí hacerlo nunca antes había hecho algo aparecido.',
        en: 'It was a collaboration for a banking project in React Native, where an animated circular bar was required, depending on the percentage it would change colors, I decided to do it, I had never done something like that before.'
    }),
    description: paserDescription(translater(currentLanguagee, {
        es: `Investigando encontré  como hacer animaciones con svg, entonces analizando el ejemplo me percate que existía una función "addListener" que se obtenía los porcentaje y fue ahí que valide en una función que por parámetro recibía el porcentaje  y por los props recibía un array de items que tenia una propiedad que tenia un array de "desde hasta" y el "color" así puede lograrlo, luego solo ordene y refactoricé el código.`,
        en: `Investigating I found how to make animations with svg, then analyzing the example I realized that there was a function "addListener" that obtained the percentages and it was there that I validated in a function that by parameter received the percentage and by the props received an array of items that had a property that had an array of "from to" and the "color" so I can achieve it, then I just ordered and refactored the code.`
    })),
    topic: [
        Topics.REACT_NATIVE,
        Topics.EXPO
    ],
    links: [
        {
            href: "https://snack.expo.io/@senixcode/animation-circular-bar",
            name: "snack animation_circular_bar",
            icon: IconsFontawesome.LINK,
            category: CategoryLink.ICON
        }
    ]

})

const lightweightEcommerceTemplate = (currentLanguagee: string): IProject => ({
    title: translater(currentLanguagee, { es: "Template ligero de ecommerce", en: "lightweight ecommerce template" }),
    titleSeo: "lightweight-ecommerce-template",
    summary: translater(currentLanguagee, {
        es: 'Es un proyecto de practica, donde use currentLanguage storage para guardar los datos,  material ui para diseñarlo, y geocurrentLanguageización para mostrar el código de País.',
        en: 'It is a practice project, where I used currentLanguage storage to save the data, ui material to design it, and geolocation to show the country code.'
    }),
    description: paserDescription(translater(currentLanguagee, {
        es: `Estuve aprendiendo sobre los hooks react y decidí como práctica hacer una plantilla de ecommerce inspirada en Amazon, algunas cosas nuevas que aprendí material ui, position y scale propiedades en css, lo más genial fue la geocurrentLanguageización del código Country, fue algo complicado hasta que encontré un api que probé con tres países Perú, Argentina, España y Estados Unidos.`,
        en: `I was learning about hooks react and decided as practice to make an ecommerce template inspired by Amazon, some new things I learned ui material, position and scale properties in css, the coolest thing was the geolocation of the Country code, it was something complicated until I found an api that I tested with three countries Peru, Argentina, Spain and United States.`
    })),
    topic: [
        Topics.REACT,
    ],
    links: [
        {
            href: "https://github.com/senixcode/lightweight-ecommerce-template",
            name: translater(currentLanguagee, { es: "repositorio ecommerce_ligero", en: "repository lightweight_ecommerce" }),
            icon: IconsFontawesome.GITHUB,
            category: CategoryLink.ICON
        },
        {
            href: "https://lightweight-ecommerce-template.netlify.app/",
            name: translater(currentLanguagee, { es: "demo ecommerce_ligero", en: "demo lightweight_ecommerce" }),
            icon: IconsFontawesome.LINK,
            category: CategoryLink.ICON
        },
        {
            href: "https://res.cloudinary.com/ds5ayigjw/image/upload/v1619855491/my-website/senixcode-ecommerce-home.png",
            name: translater(currentLanguagee, { es: "ecommerce_ligero_home", en: "lightweight_ecommerce_home" }),
            category: CategoryLink.IMAGE
        },
        {
            href: "https://res.cloudinary.com/ds5ayigjw/image/upload/v1619855491/my-website/senixcode-ecommerce-product.png",
            name: translater(currentLanguagee, { es: "ecommerce_ligero_producto", en: "lightweight_ecommerce_product" }),
            category: CategoryLink.IMAGE
        },
        {
            href: "https://res.cloudinary.com/ds5ayigjw/image/upload/v1619855491/my-website/senixcode-ecommerce-cart.png",
            name: translater(currentLanguagee, { es: "ecommerce_ligero_carrito", en: "lightweight_ecommerce_cart" }),
            category: CategoryLink.IMAGE
        },
    ]

})

const deployDigitalOceanDockerTerraform = (currentLanguagee: string): IProject => ({
    title: translater(currentLanguagee, { es: "Deploy con docker y terraform", en: "Deploy with docker and terraform" }),
    titleSeo: "senixcode_deploy_digitalOcean_docker_terraform",
    summary: translater(currentLanguagee, {
        es: 'Configure droplet, dns, configuración de servidor con terraform, y con un archivo docker-composer configure los certificados ssl redireccionando a un conteiner de nodejs',
        en: 'Configure droplet, dns, server configuration with terraform, and with a docker-composer file configure the ssl certificates by redirecting to a nodejs container'
    }),
    description: paserDescription(translater(currentLanguagee, {
        es: `Después de mi ultimo trabajo tenia mucha curiosidad sobre Linux, entonces me instale archi Linux en una maquina virtual y currentLanguage.
             Aprendí mucho sobre comandos perdiendo el miedo a la consola, no usaba ningún  "File systems", hice varias practicas con Docker.
             Buscando mejores practicas me encontré Terraform, fue ahí donde se me dio la gran idea de este proyecto, use digital ocean por comenzar hacer pruebas reales.
             Hice varias pruebas manuales antes de usar "terraform", entonces
             use cuatro servicios nginx-proxy-letsencrypt, que se usa para la "Proxy Nginx inverso", nginx-proxy para servir varios sitios web, web-redirect para redirigir a mi host y web que es un container de nodejs eso use para mi prueba final.
             Por aparte aprendí un poco de Terraform que hice una automatización configurando droplet y dns de "digital ocean", con "cloud init" configure "ubuntu server" y instalación de "Docker" .
             En conclusión diría que tuve una pequeña experiencia y practica con algunas actividades que realiza un "devop", estoy realmente sorprendido de la importancia que puede tener estas automatizaciones en los proyectos escalables.`,
        en: `After my last job I was very curious about Linux, so I installed archi Linux on a currentLanguage and virtual machine.
             I learned a lot about commands losing the fear of the console, I didn't use any file systems, I did some practices with Docker.
             Looking for best practices I found Terraform, it was there where I got the great idea of this project, I used digital ocean to start doing real tests.
             I did several manual tests before using terraform, then
             I used four services nginx-proxy-letsencrypt, which is used for the "Reverse Nginx Proxy", nginx-proxy to serve several websites, web-redirect to redirect to my host and web which is a nodejs container that I used for my final test.
             On the side I learned a little bit of Terraform that I did an automation configuring droplet and dns from "digital ocean", with "cloud init" configure "ubuntu server" and install "Docker" .
             In conclusion I would say that I had a little experience and practice with some activities that a "devop" performs, I am really surprised of the importance that these automations can have in scalable projects. `,
    })),
    topic: [
        Topics.DOCKER,
        Topics.TYPESCRIPT,
        Topics.DIGITAL_OCEAN,
        Topics.NODE,
    ],
    links: [
        {
            href: "https://github.com/senixcode/automatic-ssl-docker-nginx",
            name: translater(currentLanguagee, { es: "repositori docker_terraform_automatizacion", en: "repository docker_terraform_automation" }),
            icon: IconsFontawesome.GITHUB,
            category: CategoryLink.ICON
        }
    ]

})

export const getProjects = (currentLanguage: string): List<IProject> => ([
    myWebsite(currentLanguage),
    myApi(currentLanguage),
    myCms(currentLanguage),
    lightboxCustom(currentLanguage),
    cicularBarAnimation(currentLanguage),
    lightweightEcommerceTemplate(currentLanguage),
    deployDigitalOceanDockerTerraform(currentLanguage),
])