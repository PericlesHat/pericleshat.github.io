export default {
    title: 'Publications',
    data: [
        {
            name: 'Enhanced Gaussian Process Dynamical Models with Knowledge Transfer for Long-term Battery Degradation Forecasting',
            tags: ['Wei W. Xing*', 'Ziyang Zhang*', 'Akeel Shah'],
            descriptions: [
                'In this paper, we present a novel method for accurately predicting the end-of-life of electric vehicle batteries using a modified Gaussian Process Dynamical Model (GPDM). Unlike traditional approaches that require data from future cycles, our method uses a kernelized version of GPDM combined with transfer learning to project the future state-of-health of the battery. This allows for more robust early-stage predictions without needing data beyond the current scope. We demonstrate that our approach outperforms existing models, including Gaussian processes and neural networks, particularly in early stages of battery life, as evidenced by evaluations using NASA and Oxford datasets.',
            ],
            link: 'https://arxiv.org/pdf/2212.01609.pdf',
            type: 'J',
        },
        {
            name: "Multi-fidelity Design Optimization of Solid Oxide Fuel Cells Using a Bayesian Feature Enhanced Stochastic Collocation",
            tags: ['Wei W. Xing', 'Akeel Shah', 'Guohao Dai', 'Ziyang Zhang', 'Ting Guo', 'Hong Qiu', 'Puiki Leung', 'Qian Xu', 'Xun Zhu', 'Qiang Liao'],
            descriptions: [
                "We introduced a multi-fidelity surrogate modelling approach to enhance the optimization of solid oxide fuel cell (SOFC) performance, effectively replacing both complex physics-based models and their simpler counterparts. Our model offers detailed spatial insights instead of just scalar outputs, enabling more comprehensive optimization objectives and ensuring design uniformity. Tests on a 3D SOFC model showed our method's superior accuracy in predicting spatial data across vast locations, especially when using limited high-fidelity data points. Utilizing this model, we achieved precise and swift optimizations of SOFC performance for various objectives, outpacing traditional full model evaluations.",
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
