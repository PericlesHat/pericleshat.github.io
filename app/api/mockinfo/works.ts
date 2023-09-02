export default {
    title: 'Works',
    data: [
        {
            banner: './misc/egpdm.png',
            title: 'Enhanced Gaussian Process Dynamical Models',
            descriptions:
                'To enhance early prediction accuracy for Li-ion battery health and lifespan, many have turned to feature-based machine-learning. We presents a novel nonlinear state-space model named Enhanced Gaussian Process Dynamical Model. We adopt a generalized kernel substitution for better covariance in observables and latent coordinates, merging it with transfer learning to forecast health up to end-of-life. This model doesn’t need feature values beyond existing data and utilizes transfer learning for optimal hyperparameters from related battery data. Our approach outperforms leading algorithms, including Gaussian process and deep networks, especially in early battery stages.',
            link: 'https://github.com/PericlesHat/enhanced-GPDM',
        },
        {
            banner: './misc/gpdm.png',
            title: 'Tutorial: A Painless GPDM Implementation',
            descriptions:
                'The Gaussian Process Dynamical Model (GPDM) is a powerful method that combines the non-parametric flexibility of Gaussian Processes (GPs) with the temporal coherence of dynamical models. The task performed by GPDM is to initialize high-dimensional observations into a lower-dimensional latent space. It utilizes a dynamic GP (dGP) to autoregressively generate predictive values and then maps them back to the high-dimensional observation space using an observation GP (oGP). This tutorial aims to provide an in-depth understanding of how to implement GPDMs and its transfer learning ability, particularly in the realm of time-series data analysis.',
            link: 'https://github.com/IceLab-X/Mini-GP/blob/main/gpdm.ipynb',
        },
        // {
        //     banner: 'https://images.unsplash.com/photo-1689850543263-01a52ccc6943',
        //     title: 'Visionary Innovation Knowledge Universe',
        //     descriptions:
        //         'This website is mainly a document that introduces how to use various AI APIs and the concepts of various parameters, and provides several practical examples.\n\
        //     Our website includes introductions to various AI APIs, including speech recognition, image recognition, natural language processing, and more. Our introductions not only tell you how to use these APIs, but also explain the concepts of various parameters so that you can better understand how the APIs work.\n\
        //     To help you better grasp these concepts and technologies, we also provide some practical examples. These examples can help you better understand how to use these APIs and gain more inspiration and ideas from them.\n\
        //     We are committed to making AI technology more popular and easy to use, and hope that our website can provide you with valuable help. If you have any questions or suggestions, please feel free to contact us.',
        //     link: 'https://aiweb.viku.org/',
        // },
    ],
    status: 0,
}
