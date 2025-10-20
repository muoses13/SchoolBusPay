### Overview

This is a student management application built with Next.js and Firebase. It allows users to view, add, and manage student data. The application uses modern Next.js features like the App Router, Server Components, and Server Actions.

### Features

*   **Student Management:**
    *   View a list of students from a Firestore database.
    *   Add new students to the database using a form.
    *   Real-time updates using Server Actions and `revalidatePath`.
*   **Admin Management:**
    *   View a list of admins.
    *   Add new admins to the list.
*   **Dashboard:**
    *   A central dashboard to provide an overview of the application.
    *   Cards for "Total Students", "New Students (Last 30 Days)", and "Active Students".
    *   A bar chart to visualize the distribution of students.
    *   A "Recent Activity" feed that displays recent events from the Firestore database in real-time.
*   **Firebase Integration:**
    *   Uses Firebase for the database.

### Style & Design

*   **Layout:**
    *   A sidebar for navigation and a main content area.
*   **Styling:**
    *   Uses Tailwind CSS for styling.
    *   A modern and clean design.

### Current Plan

*   The application is now fully functional, with a dynamic "Recent Activity" feed on the dashboard.
