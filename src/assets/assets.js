
import React from 'react';
import logo from './logo.png';
import video_banner from "../assets/home-page-banner.mp4";
import people from './people.png';
import people_org from './people-org.png';
import credits from '../assets/credits.png';

export const assets = {
    logo,
    video_banner,
    people,
    people_org,
    credits,
}

export const steps=[
    {
        step: "Step 1",
        title: "Select an image",
        description: `First, choose the image you want to edit. You can either upload a photo from your device
                or drag and drop it into the upload area. Make sure the image is clear and in a supported
                format (like JPG or PNG) for the best background removal results.`
    },
    {
        step: "Step 2",
        title: "Let magic remove the background",
        description: ` Our tool automatically detects the subject in your photo and removes the background
                with high precision. No manual editing is needed — just sit back and let the AI do the work.`
    },
    {
        step: "Step 3",
        title: "Download your image",
        description: ` After selecting a new background color, download your photo and you're done!
                You can also save your picture in the Photoroom app by creating an account.`
    }
]
export const categories = ["People", "Products", "Animals", "Cars", "Graphics"];

export const plans = [
    {
        id: "Basic",
        name: "Basic Package",
        price: 299,
        credits: "50 credits",
        description: "Best for personal use",
        popular: false
    },
    {
        id: "Premium",
        name: "Premium Package",
        price: 499,
        credits: "150 credits",
        description: "Best for business use",
        popular: true
    },
    {
        id: "Ultimate",
        name: "Ultimate Package",
        price: 1499,
        credits: "500 credits",
        description: "Best for enterprise use",
        popular: false
    },
]

export const testimonials = [
    {
        id: 1,
        quote: "This AI background remover blew us away! It’s fast, accurate, and hands-down the best tool we’ve used. Nothing else even comes close!",
        author: "Rishi Singh",
        handle: "@Rishi_Singh",
    },
    {
        id: 2,
        quote: "No more frustration! This tool is light-years ahead of anything I’ve tried — unbelievably easy, super accurate, and a total game-changer.",
        author: "Nikhil Kumar",
        handle: "@nikhilKumar018",
    },
    {
        id: 3,
        quote: "The results are studio-quality! It even handled tricky hair details flawlessly — no jagged edges, just smooth and professional every time.",
        author: "Snehasish Das",
        handle: "@ordinaryGuy76",
    }
];

export const FOOTER_CONSTANTS = [
    {
        url: "https://www.linkedin.com/in/arka-kundu-03b2a226b",
        logo: "https://img.icons8.com/color/48/linkedin.png",  // ✅ working
        title: "LinkedIn",
        target: "_blank"
    },
    {
        url: "https://github.com/Arka056",
        logo: "https://img.icons8.com/material-rounded/48/github.png",  // ✅ working
        title: "GitHub",
        target: "_blank"
    },
    {
        url: "mailto:arka99325@gmail.com",
        logo: "https://img.icons8.com/color/48/gmail.png",  // ✅ working
        title: "Send Email",
        target: "_self"
    },
    {
        url: "https://www.instagram.com/arka_kundu_?igsh=MXRncmFlOXFpcmE4ZQ==",
        logo: "https://img.icons8.com/fluency/48/instagram-new.png",  // ✅ working
        title: "Instagram",
        target: "_blank"
    }
];
