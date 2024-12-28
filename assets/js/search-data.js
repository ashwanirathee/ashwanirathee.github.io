// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "About",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-blog",
          title: "Blog",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/blog/";
          },
        },{id: "nav-publications",
          title: "Publications",
          description: "publications by categories in reversed chronological order.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "nav-projects",
          title: "Projects",
          description: "2024-present",
          section: "Navigation",
          handler: () => {
            window.location.href = "/projects/";
          },
        },{id: "nav-repositories",
          title: "Repositories",
          description: "Work samples of interest",
          section: "Navigation",
          handler: () => {
            window.location.href = "/repositories/";
          },
        },{id: "nav-cv",
          title: "CV",
          description: "Here is my CV",
          section: "Navigation",
          handler: () => {
            window.location.href = "/cv/";
          },
        },{id: "nav-teaching",
          title: "Teaching",
          description: "Materials for courses I taught",
          section: "Navigation",
          handler: () => {
            window.location.href = "/teaching/";
          },
        },{id: "post-ucsc-fall-quarter-1",
      
        title: "UCSC Fall Quarter 1",
      
      description: "this is what included image galleries could look like",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2024/photo-gallery/";
        
      },
    },{id: "post-2-way-communication-with-microcontrollers-using-c-and-julia",
      
        title: '2-Way Communication with Microcontrollers using C and Julia <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
      
      description: "",
      section: "Posts",
      handler: () => {
        
          window.open("https://juliazoid.com/2-way-communication-with-microcontrollers-using-c-and-julia-611e37c18da7?source=rss-71f2969466cf------2", "_blank");
        
      },
    },{id: "post-multithreading-in-python-part-1",
      
        title: 'Multithreading in Python: Part 1 <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
      
      description: "",
      section: "Posts",
      handler: () => {
        
          window.open("https://towardsdev.com/multithreading-in-python-part-1-6cc1c75fbaa2?source=rss-71f2969466cf------2", "_blank");
        
      },
    },{id: "post-how-to-add-file-format-to-fileio-jl-and-image-related-formats-to-imageio-jl",
      
        title: 'How to add File Format to FileIO.jl and Image related formats to ImageIO.jl... <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
      
      description: "",
      section: "Posts",
      handler: () => {
        
          window.open("https://ashwanirathee.medium.com/how-to-add-file-format-to-fileio-jl-and-image-related-formats-to-imageio-jl-a17e3942d638?source=rss-71f2969466cf------2", "_blank");
        
      },
    },{id: "post-how-to-read-write-and-capture-videos-from-a-camera-in-julia-using-videoio-jl",
      
        title: 'How to read, write and capture videos from a camera in Julia using... <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
      
      description: "",
      section: "Posts",
      handler: () => {
        
          window.open("https://juliazoid.com/how-to-read-write-and-capture-videos-from-a-camera-in-julia-using-videoio-jl-19da333637d5?source=rss-71f2969466cf------2", "_blank");
        
      },
    },{id: "post-how-to-read-write-and-display-images-in-julia-using-fileio-jl-and-imageview-jl",
      
        title: 'How to read, write and display images in Julia using FileIO.jl and ImageView.jl... <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
      
      description: "",
      section: "Posts",
      handler: () => {
        
          window.open("https://juliazoid.com/how-to-read-write-and-display-images-in-julia-using-fileio-jl-and-imageview-jl-f8c6b73ac766?source=rss-71f2969466cf------2", "_blank");
        
      },
    },{id: "post-release-of-gifimages-jl-for-making-gif-files-more-accessible-gsoc-22-work-product",
      
        title: 'Release of GIFImages.jl for making GIF files more accessible: GSOC’22 Work Product <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
      
      description: "",
      section: "Posts",
      handler: () => {
        
          window.open("https://juliazoid.com/release-of-gifimages-jl-for-making-gif-files-more-accessible-gsoc22-work-product-6c162a6ba17f?source=rss-71f2969466cf------2", "_blank");
        
      },
    },{id: "post-release-of-exifviewer-jl-for-image-metadata-gsoc-22-work-product",
      
        title: 'Release of ExifViewer.jl for Image Metadata : GSOC’22 Work Product <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
      
      description: "",
      section: "Posts",
      handler: () => {
        
          window.open("https://juliazoid.com/release-of-exifviewer-jl-for-image-metadata-gsoc22-work-product-fa0bcdc3fab4?source=rss-71f2969466cf------2", "_blank");
        
      },
    },{id: "news-joined-fleetsafe-india-as-engineer-intern",
          title: 'Joined FleetSafe India as Engineer Intern',
          description: "",
          section: "News",},{id: "news-started-working-as-software-engineer-at-fleetsafe-india",
          title: 'Started working as Software Engineer at FleetSafe India',
          description: "",
          section: "News",},{id: "news-started-masters-of-science-in-computer-science-at-uc-santa-cruz",
          title: 'Started Masters of Science in Computer Science at UC Santa Cruz',
          description: "",
          section: "News",},{id: "news-finished-first-quarter-at-ucsc-with-gpa-3-85-4",
          title: 'Finished first quarter at UCSC with GPA 3.85/4',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/announcement_4/";
            },},{id: "projects-miner",
          title: 'Miner',
          description: "Voxel worlds, love for Mining and Minecraft",
          section: "Projects",handler: () => {
              window.location.href = "/projects/1_project/";
            },},{id: "projects-project-2",
          title: 'project 2',
          description: "a project with a background image and giscus comments",
          section: "Projects",handler: () => {
              window.location.href = "/projects/2_project/";
            },},{id: "projects-project-3-with-very-long-name",
          title: 'project 3 with very long name',
          description: "a project that redirects to another website",
          section: "Projects",handler: () => {
              window.location.href = "/projects/3_project/";
            },},{id: "projects-project-4",
          title: 'project 4',
          description: "another without an image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/4_project/";
            },},{id: "projects-project-5",
          title: 'project 5',
          description: "a project with a background image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/5_project/";
            },},{id: "projects-project-6",
          title: 'project 6',
          description: "a project with no image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/6_project/";
            },},{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%61%72%61%74%68%65%65%31@%75%63%73%63.%65%64%75", "_blank");
        },
      },{
        id: 'social-github',
        title: 'GitHub',
        section: 'Socials',
        handler: () => {
          window.open("https://github.com/ashwanirathee", "_blank");
        },
      },{
        id: 'social-linkedin',
        title: 'LinkedIn',
        section: 'Socials',
        handler: () => {
          window.open("https://www.linkedin.com/in/ashwani-rathee", "_blank");
        },
      },{
        id: 'social-scholar',
        title: 'Google Scholar',
        section: 'Socials',
        handler: () => {
          window.open("https://scholar.google.com/citations?user=UKkRQ0oAAAAJ", "_blank");
        },
      },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
