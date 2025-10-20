
# School Bus Payment Tracking System - Blueprint

## Overview

This document outlines the development plan for a comprehensive web application designed to streamline school bus payment tracking and management. The system will empower administrators to efficiently manage student records, track payments, automate payment verification through bank statement uploads, and generate insightful reports. The application will be built with a modern, user-friendly interface and a robust backend to ensure a seamless and reliable experience.

## Design and Features

### Visual Design (Aesthetics)

*   **UI Framework:** The application will be built using Next.js and styled with Tailwind CSS to create a clean, modern, and responsive interface.
*   **Color Palette:** A professional and friendly color scheme will be used, with a primary palette of blues and yellows, complemented by greens for success states and reds for alerts.
*   **Typography:** We will use a clean and readable sans-serif font like Inter or Poppins for all text, with clear typographic hierarchy for headings, paragraphs, and labels.
*   **Iconography:** We will use a consistent set of icons (e.g., from an open-source library like Heroicons or Feather Icons) to enhance usability and provide visual cues for actions.
*   **Layout:** The layout will be based on a sidebar navigation for easy access to different sections of the application, with a main content area for displaying information and forms. The design will be responsive and optimized for both desktop and mobile devices.

### Core Features

#### 1. Student Management
*   **CRUD Operations:** Administrators can add, edit, and delete student profiles.
*   **Student Profile:** Each student record will include:
    *   Full Name
    *   Grade/Class
    *   Bus Route
    *   Parent Contact Information (Phone/Email)
    *   Payment Status (Paid/Unpaid)
    *   Last Payment Date
*   **Bulk Import:** Functionality to import a list of students from a CSV or Excel file.

#### 2. Dashboard
*   **Key Metrics:** Display of key statistics:
    *   Total Number of Students
    *   Total Paid Students
    *   Total Unpaid Students
    *   Total Amount Collected (Current Month)
*   **Visualizations:** Interactive charts and graphs to visualize payment progress and filter data by class, bus route, or month.
*   **Overdue Payments:** A clear section highlighting students with overdue payments, marked in red.

#### 3. Bank Statement Upload & Auto-Matching
*   **File Upload:** Allow administrators to upload bank statements in CSV or PDF format.
*   **Automatic Parsing:** The system will parse the statement to extract transaction details (e.g., name, reference number, amount, date).
*   **Auto-Matching:** Automatically match payments to students based on name or a unique reference number.
*   **Confidence Score:** A "Match Confidence" score will be displayed for partial matches, allowing for quick verification.
*   **Manual Review:** Unmatched transactions will be flagged for manual review and matching.

#### 4. Manual Payment Updates
*   **Manual Entry:** Admins can manually mark students as "Paid."
*   **Payment Details:** Ability to specify payment method (Bank Transfer, Cash, Check), payment date, and amount.
*   **Receipt Upload:** Option to upload a payment receipt (PDF or image).
*   **Undo Payment:** Ability to revert a payment status if a mistake was made.

#### 5. Notifications & Reminders
*   **Automated Reminders:** Send automated payment reminders via email or SMS to parents of unpaid students before the due date.
*   **Customizable Templates:** Editable message templates for reminders.
*   **In-App Notifications:** Real-time in-app notifications for new payments, successful uploads, or required actions.

#### 6. Reports & Analytics
*   **Downloadable Reports:** Generate and download reports in PDF or Excel format.
*   **Report Types:**
    *   Payment status per bus route.
    *   Payment status per class.
    *   Monthly summary reports.
    *   Detailed transaction logs.
*   **Income Summary:** Reports will include total income per month.

#### 7. Role-Based Access Control (RBAC)
*   **Admin:** Full access to all features and settings.
*   **Accountant:** Access to payment management, bank statement uploads, and reporting features.
*   **Bus Supervisor:** View-only access to students assigned to their specific bus route.

#### 8. Audit Log
*   **Track Changes:** A comprehensive log that records all significant actions performed by users, such as creating a student, updating a payment, or deleting a record. Each log entry will include who made the change, what was changed, and the timestamp.

### Optional (Future) Features
*   **Parent/Student Portal:** A secure portal for parents to view payment status, history, and make online payments.
*   **Online Payments:** Integration with a payment gateway (e.g., Stripe, PayPal) to accept online payments.
*   **QR Code Receipts:** Generate QR codes for receipts that can be quickly scanned for verification.
*   **Offline Mode:** Allow certain features to work offline, with data syncing once a connection is available.

## Development Plan

### Phase 1: Project Setup & Foundation (Current)
1.  **Initialize `blueprint.md`:** Create this document to serve as the single source of truth for the project's lifecycle.
2.  **Project Structure Migration:** Transition the existing Next.js project from the `pages` directory to the `app` router for improved organization and features.
3.  **Firebase Integration:** Set up Firebase for backend services. Configure `.idx/mcp.json` to enable Firebase server emulation within Firebase Studio.
4.  **Styling with Tailwind CSS:** Install and configure Tailwind CSS for a utility-first styling approach.
5.  **Basic Layout:** Create a main application layout, including a persistent sidebar for navigation and a main content area.
6.  **Initial Pages:** Set up the basic file structure and components for the primary pages: Dashboard, Students, Payments, and Reports.

### Phase 2: Student Management
1.  **Student Model & API:** Define the data model for students in Firestore and create API endpoints for CRUD operations.
2.  **Student List View:** Develop the UI to display a list of all students with their details.
3.  **Add/Edit Student Form:** Create a form for adding and editing student information.
4.  **Delete Student Functionality:** Implement the logic to delete students from the system.
5.  **CSV Import:** Build the feature to import student data from a CSV file.

### Phase 3: Dashboard & Payments
1.  **Dashboard UI:** Design and implement the dashboard with stat cards and chart placeholders.
2.  **Manual Payment Form:** Create the UI and logic for manually marking students as paid.
3.  **Payment Model & API:** Define the data model for payments in Firestore and create corresponding API endpoints.
4.  **Bank Statement Upload:** Implement the file upload functionality for bank statements.
5.  **Statement Parsing & Matching:** Develop the backend logic to parse uploaded statements and auto-match payments to students.

### Phase 4: Advanced Features & Deployment
1.  **Role-Based Access:** Implement user authentication with Firebase Auth and set up role-based access control.
2.  **Notifications:** Integrate an email service to send automated payment reminders.
3.  **Reporting:** Develop the functionality to generate and download reports.
4.  **Audit Log:** Implement logging for all major actions.
5.  **Deployment:** Deploy the application to Firebase Hosting.
