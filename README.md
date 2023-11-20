# React Stories App

This is a simple React application that displays user profile information and a list of posts. The application consists of two main components: `App` and `Posts`.

## `App` Component

### Header Section
- The header contains the title "STORIES" with a decorative line next to it. It also includes a "Courses" button.

### Profile and Background
- The profile section displays a cover image and user information, including a profile picture, name (with a verified badge), follower count, following count, and additional details about the user.

### Total Posts
- The total number of posts by the user is displayed along with a horizontal line.

### Posts
- The application fetches post data from a `dummy` file and maps over each post to display them using the `Posts` component.
- Each post includes a title, body, and metadata such as the author, posting time, read time, and views.
- The read time is calculated based on an assumed average reading speed of 200 words per minute.

## `Posts` Component

- Displays individual posts with a title, body, and metadata.
- Metadata includes the post author, posting time, read time, and views.
- The "like" button (thumbs up icon) is also included.

## Running the Application

1. Install dependencies using `npm install`.
2. Run the application with `npm start`.

Feel free to customize and enhance the application based on your requirements.
