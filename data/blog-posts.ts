export const blogPosts = [
  {
    title: "Building a Terminal-Style Portfolio with Next.js and Catppuccin",
    slug: "terminal-portfolio-nextjs",
    date: "2023-11-15",
    prev: null,
    next: "react-hooks-guide",
    content: `
      <p>Creating a terminal-style portfolio website can be a fun way to showcase your developer skills while paying homage to the command line interface that many of us use daily.</p>
      
      <h2>Why Terminal Style?</h2>
      <p>As developers, we spend a significant amount of time in the terminal. A terminal-themed portfolio not only looks unique but also demonstrates your familiarity with command-line interfaces.</p>
      
      <h2>Getting Started with Next.js</h2>
      <p>Next.js provides an excellent foundation for building modern web applications. Its file-based routing system makes it easy to organize your portfolio pages.</p>
      
      <pre><code>npx create-next-app@latest terminal-portfolio</code></pre>
      
      <h2>Implementing Catppuccin Colors</h2>
      <p>Catppuccin is a soothing pastel theme for various applications, including terminals. To implement it in your Next.js project, you can define CSS variables for each color in the palette.</p>
      
      <pre><code>:root {
  --ctp-rosewater: #f5e0dc;
  --ctp-flamingo: #f2cdcd;
  --ctp-pink: #f5c2e7;
  /* ... other colors ... */
}</code></pre>
      
      <h2>Creating Terminal Components</h2>
      <p>To achieve a terminal look, you'll need components like a terminal window, command prompt, and output display. These can be styled to mimic the appearance of popular terminal emulators.</p>
      
      <h2>Adding Interactivity</h2>
      <p>Consider adding interactive elements like a command input that responds to user commands, simulating a real terminal experience.</p>
      
      <h2>Conclusion</h2>
      <p>A terminal-style portfolio is not just visually appealing but also functional and memorable. It's a creative way to stand out while showcasing your technical skills.</p>
    `,
  },
  {
    title: "A Comprehensive Guide to React Hooks",
    slug: "react-hooks-guide",
    date: "2023-10-22",
    prev: "terminal-portfolio-nextjs",
    next: "typescript-best-practices",
    content: `
      <p>React Hooks have revolutionized how we write React components, allowing us to use state and other React features without writing classes.</p>
      
      <h2>useState: Managing State in Functional Components</h2>
      <p>The useState hook allows you to add state to functional components. It returns a stateful value and a function to update it.</p>
      
      <pre><code>const [count, setCount] = useState(0);</code></pre>
      
      <h2>useEffect: Side Effects in Components</h2>
      <p>The useEffect hook lets you perform side effects in functional components. It's similar to componentDidMount, componentDidUpdate, and componentWillUnmount combined.</p>
      
      <pre><code>useEffect(() => {
  document.title = \`You clicked \${count} times\`;
  
  return () => {
    // Cleanup code
  };
}, [count]);</code></pre>
      
      <h2>useContext: Consuming Context</h2>
      <p>The useContext hook makes it easier to consume context in your components without nesting.</p>
      
      <pre><code>const theme = useContext(ThemeContext);</code></pre>
      
      <h2>useRef: Accessing DOM Elements</h2>
      <p>The useRef hook provides a way to access DOM elements directly and persist values between renders without causing re-renders.</p>
      
      <pre><code>const inputRef = useRef(null);</code></pre>
      
      <h2>useMemo and useCallback: Optimization</h2>
      <p>These hooks help optimize performance by memoizing values and callbacks to prevent unnecessary calculations and renders.</p>
      
      <h2>Custom Hooks: Reusing Logic</h2>
      <p>One of the most powerful features of hooks is the ability to create custom hooks that encapsulate and reuse stateful logic across components.</p>
      
      <h2>Conclusion</h2>
      <p>React Hooks provide a more direct API to React concepts you already know: props, state, context, refs, and lifecycle. They offer a more ergonomic way to reuse stateful logic between components.</p>
    `,
  },
  {
    title: "TypeScript Best Practices for Modern Web Development",
    slug: "typescript-best-practices",
    date: "2023-09-18",
    prev: "react-hooks-guide",
    next: "nextjs-server-components",
    content: `
      <p>TypeScript has become an essential tool for modern web development, providing type safety and improved developer experience. Here are some best practices to follow when working with TypeScript.</p>
      
      <h2>Use Strict Mode</h2>
      <p>Enable strict mode in your tsconfig.json to catch more potential errors:</p>
      
      <pre><code>{
  "compilerOptions": {
    "strict": true
  }
}</code></pre>
      
      <h2>Define Proper Types</h2>
      <p>Always define proper types for your data structures. This improves code readability and helps catch errors early.</p>
      
      <pre><code>interface User {
  id: number;
  name: string;
  email: string;
  isActive: boolean;
}</code></pre>
      
      <h2>Avoid 'any' Type</h2>
      <p>The 'any' type defeats the purpose of using TypeScript. Try to avoid it whenever possible and use more specific types.</p>
      
      <h2>Use Type Inference</h2>
      <p>TypeScript has powerful type inference capabilities. Don't add type annotations when they're unnecessary.</p>
      
      <pre><code>// Good
const name = "John";

// Unnecessary
const name: string = "John";</code></pre>
      
      <h2>Utilize Union Types</h2>
      <p>Union types allow a value to be one of several types, which is useful for handling different cases.</p>
      
      <pre><code>type Status = "pending" | "approved" | "rejected";</code></pre>
      
      <h2>Use Generics for Reusable Code</h2>
      <p>Generics allow you to create reusable components that can work with a variety of types.</p>
      
      <pre><code>function getFirstElement<T>(array: T[]): T | undefined {
  return array[0];
}</code></pre>
      
      <h2>Conclusion</h2>
      <p>Following these TypeScript best practices will help you write more maintainable, robust, and error-free code. TypeScript is not just about adding types; it's about improving the overall quality of your codebase.</p>
    `,
  },
  {
    title: "Understanding Next.js Server Components",
    slug: "nextjs-server-components",
    date: "2023-08-05",
    prev: "typescript-best-practices",
    next: "web-accessibility",
    content: `
      <p>Next.js 13 introduced a revolutionary feature: React Server Components. This new paradigm changes how we think about rendering React applications.</p>
      
      <h2>What Are Server Components?</h2>
      <p>Server Components are React components that render on the server. They can access server-side resources directly and reduce the amount of JavaScript sent to the client.</p>
      
      <h2>Benefits of Server Components</h2>
      <ul>
        <li>Reduced client-side JavaScript</li>
        <li>Direct access to backend resources</li>
        <li>Improved initial page load</li>
        <li>Better SEO</li>
      </ul>
      
      <h2>Server Components vs. Client Components</h2>
      <p>In Next.js, components are Server Components by default. To make a component a Client Component, you need to add the "use client" directive at the top of the file.</p>
      
      <pre><code>// This is a Server Component by default
export default function Page() {
  return <h1>Hello, Server Component!</h1>;
}</code></pre>
      
      <pre><code>"use client"

// This is a Client Component
export default function Counter() {
  const [count, setCount] = useState(0);
  return (
    <button onClick={() => setCount(count + 1)}>
      Count: {count}
    </button>
  );
}</code></pre>
      
      <h2>Data Fetching in Server Components</h2>
      <p>One of the biggest advantages of Server Components is the ability to fetch data directly without additional client-side requests.</p>
      
      <pre><code>// This component fetches data on the server
export default async function UserProfile({ userId }) {
  const user = await fetchUser(userId);
  return <div>{user.name}</div>;
}</code></pre>
      
      <h2>Interleaving Server and Client Components</h2>
      <p>You can compose applications using both Server and Client Components, taking advantage of each where appropriate.</p>
      
      <h2>Conclusion</h2>
      <p>Server Components represent a significant shift in how we build React applications, especially in the Next.js ecosystem. By understanding when and how to use them, you can create more efficient and performant web applications.</p>
    `,
  },
  {
    title: "Web Accessibility: Building Inclusive Digital Experiences",
    slug: "web-accessibility",
    date: "2023-07-12",
    prev: "nextjs-server-components",
    next: null,
    content: `
      <p>Web accessibility is about ensuring that websites and web applications are usable by everyone, including people with disabilities. It's not just a nice-to-have feature; it's a necessity for creating truly inclusive digital experiences.</p>
      
      <h2>Why Accessibility Matters</h2>
      <p>Accessibility benefits everyone, not just users with disabilities. It improves usability for all users, enhances SEO, and helps meet legal requirements in many jurisdictions.</p>
      
      <h2>WCAG Guidelines</h2>
      <p>The Web Content Accessibility Guidelines (WCAG) provide a framework for making web content more accessible. They are organized around four principles: Perceivable, Operable, Understandable, and Robust (POUR).</p>
      
      <h2>Semantic HTML</h2>
      <p>Using semantic HTML elements is one of the simplest ways to improve accessibility. Elements like &lt;nav&gt;, &lt;main&gt;, &lt;article&gt;, and &lt;button&gt; provide meaning to screen readers and other assistive technologies.</p>
      
      <pre><code><!-- Bad -->
<div class="button" onclick="submit()">Submit</div>

<!-- Good -->
<button type="submit">Submit</button></code></pre>
      
      <h2>Keyboard Navigation</h2>
      <p>Ensure that all interactive elements are accessible via keyboard navigation. This includes managing focus states and providing skip links for navigation.</p>
      
      <h2>ARIA Attributes</h2>
      <p>Accessible Rich Internet Applications (ARIA) attributes can enhance accessibility when HTML alone isn't sufficient.</p>
      
      <pre><code><div role="alert" aria-live="assertive">
  Form submitted successfully!
</div></code></pre>
      
      <h2>Color Contrast</h2>
      <p>Ensure sufficient color contrast between text and background to make content readable for users with visual impairments.</p>
      
      <h2>Testing for Accessibility</h2>
      <p>Use tools like axe, WAVE, and screen readers to test your website's accessibility. Manual testing with keyboard-only navigation is also essential.</p>
      
      <h2>Conclusion</h2>
      <p>Building accessible websites is not just about compliance; it's about creating better experiences for all users. By incorporating accessibility from the start of your projects, you can ensure that your digital products are inclusive and usable by everyone.</p>
    `,
  },
]
