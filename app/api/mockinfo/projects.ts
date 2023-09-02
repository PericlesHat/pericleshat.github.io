export default {
    title: 'Publications',
    data: [
        {
            name: 'Enhanced Gaussian Process Dynamical Models with Knowledge Transfer for Long-term Battery Degradation Forecasting',
            tags: ['Wei W. Xing*', 'Ziyang Zhang*', 'Akeel Shah'],
            descriptions: [
                'Predicting the end-of-life or remaining useful life of batteries in electric vehicles is a critical and challenging problem. Over recent years, the predominant approach has been to use machine learning to predict the evolution of the state-of-health during repeated cycling. To enhance the accuracy of predictive estimates, especially early in the battery\'s lifetime, many algorithms have incorporated features obtained from data collected by battery management systems. However, unless multiple battery datasets are used for a direct prediction of the end-of-life—which provides only ballpark estimates—such an approach becomes infeasible, as the features are not known for future cycles.',
                '',
                'In this paper, we introduce a method that effectively addresses this limitation, employing a modified Gaussian Process Dynamical Model (GPDM). GPDM is an unsupervised, nonlinear state-space approach to time series modeling, utilizing a latent variable to monitor the state of the dynamical system. We propose a kernelized version of GPDM, which allows for a more sophisticated covariance structure, and merge it with transfer learning to project the future state-of-health up to the end-of-life. This method can integrate features within the physically observable domain without needing their values beyond the scope of the available training data. Transfer learning is employed to enhance the learning of hyperparameters using data from batteries with similar characteristics. We demonstrate the accuracy and superiority of our approach over modern benchmark algorithms, including Gaussian process models, as well as convolutional and recurrent networks. This is particularly evident during the early stages of battery life, as shown in the NASA and Oxford dataset evaluations.',
            ],
            link: 'https://arxiv.org/pdf/2212.01609.pdf',
            type: 'J',
        },
        {
            name: "Multi-fidelity Design Optimization of Solid Oxide Fuel Cells Using a Bayesian Feature Enhanced Stochastic Collocation",
            tags: ['Wei W. Xing', 'Akeel Shah', 'Guohao Dai', 'Ziyang Zhang', 'Ting Guo', 'Hong Qiu', 'Puiki Leung', 'Qian Xu', 'Xun Zhu', 'Qiang Liao'],
            descriptions: [
                "We developed a multi-fidelity surrogate modelling approach to replace the complex and costly physics-based computer models often used in the optimization of solid oxide fuel cell (SOFC) performance, and the simplified models that are used in lieu of complex models. We extended multi-fidelity stochastic collocation with a feature engineering step, and eliminated the requirement for the exact low-fidelity output at the inference stage. Unlike previous approaches, the surrogate model we developed provides detailed spatial information instead of one or more scalar outputs. This allows the incorporation of such information into the objective of the optimization study, with the flexibility to choose from objectives such as minimum, maximum, or average. Additionally, the detailed spatial information can be used for general design purposes, like ensuring uniformity in reactant and potential distributions. From results on a 3D SOFC model, we demonstrated highly accurate predictions of multiple spatially distributed quantities at up to 250,000 locations. The results surpass state-of-the-art multi-fidelity approaches, especially with a low number of high-fidelity training points. We used the surrogate model to optimize the SOFC performance with respect to different objectives (including nonlinear constraints and multiple objectives), with results that are both accurate and obtained in a fraction of the time required for the full model.",
            ],
            link: 'https://rawcdn.githack.com/PericlesHat/old.blog/ce156a7b5c6d84e7a0cd26882029b13586474a0d/ESC.pdf',
            type: 'J',
        },
        // {
        //     name: 'Site Design',
        //     tags: ['Design', 'UI/UX', 'Website'],
        //     descriptions: [
        //         "a fun and playful design that's perfect for showcasing your creativity and personality online! With its bright colors, whimsical graphics, and charming typography, this template is sure to catch the eye of anyone who visits your website. Whether you're a blogger, artist, or small business owner, the Silly Girl template is a great choice for expressing your unique style and making a memorable impression on your audience. So why not add a touch of fun to your online presence with the Silly Girl template today!",
        //         'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore. Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore.',
        //     ],
        // },
    ],
    status: 0,
}
