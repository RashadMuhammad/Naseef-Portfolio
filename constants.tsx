
import React from 'react';
import { Project, Experience, SkillGroup } from './types';

export const PROJECTS: Project[] = [
  {
    title: "Polosys Care",
    description: "Enterprise ticket management system for handling bug reports and service requests within an ERP ecosystem.",
    features: ["Ticket creation & tracking", "Real-time notifications", "Role-based access"],
    tech: ["DDD Architecture", "Riverpod", "Firebase FCM"],
    icon: "🎫"
  },
  {
    title: "Polosys Books",
    description: "Business accounting suite for managing daily operations, sales, and analytics, similar to Zoho Books.",
    features: ["Sales & purchase tracking", "Invoice generation", "Reports & analytics"],
    tech: ["MVC Architecture", "Provider"],
    icon: "📖"
  },
  {
    title: "Mazra Fresh",
    description: "Comprehensive e-commerce platform for online grocery shopping with secure checkout and order tracking.",
    features: ["Product search", "Cart management", "Order tracking"],
    tech: ["DDD Architecture", "Riverpod"],
    icon: "🛒"
  },
  {
    title: "Mazra Delivery",
    description: "Companion app for Mazra Fresh used by delivery partners for order assignment and live status updates.",
    features: ["Live order status", "Earnings tracking", "Delivery history"],
    tech: ["MVC Architecture", "Provider"],
    icon: "🚚"
  },
  {
    title: "Offline POS",
    description: "Fully offline point-of-sale system for Windows & Android, handling billing and stock sync.",
    features: ["Local database sync", "Stock management", "Custom invoicing"],
    tech: ["MVVM Architecture", "Provider"],
    icon: "💻"
  },
  {
    title: "BonPlat",
    description: "AI-powered meal recommendation app using Gemini for personalized nutrition planning.",
    features: ["AI meal generation", "Nutrition filtering", "User profiles"],
    tech: ["Clean Architecture", "Riverpod", "Firebase AI"],
    icon: "🥗"
  }
];

export const EXPERIENCES: Experience[] = [
  {
    role: "Flutter Developer",
    company: "Polosys Technologies LLP",
    period: "Sept 2024 – Present",
    highlights: [
      "Building ERP-based ticketing and business applications",
      "Implementing Clean & DDD architecture",
      "Integrating Firebase services and push notifications",
      "Optimizing performance and scalability for 5+ production apps"
    ]
  },
  {
    role: "Flutter Intern",
    company: "Luminar Technolab, Kochi",
    period: "June 2023 – Oct 2023",
    highlights: [
      "Developed multiple Flutter apps from scratch",
      "Mastered state management and architecture patterns",
      "Built integrations with REST APIs and Firebase"
    ]
  }
];

export const SKILLS: SkillGroup[] = [
  {
    category: "Languages & Frameworks",
    skills: ["Flutter", "Dart"]
  },
  {
    category: "State Management",
    skills: ["Provider", "Riverpod"]
  },
  {
    category: "Architecture",
    skills: ["MVC", "MVVM", "DDD", "Clean Architecture"]
  },
  {
    category: "Backend & Services",
    skills: ["Firebase Auth", "FCM", "Firestore", "Gemini AI"]
  },
  {
    category: "Storage & Networking",
    skills: ["Dio", "Hive", "Secure Storage", "SharedPreferences"]
  }
];
