'use client';

import React, { useState } from 'react';
import Link from 'next/link';

const HomePage = () => {
  const [selectedComponent, setSelectedComponent] = useState('');
  const [generatedCode, setGeneratedCode] = useState('');
  const [componentConfig, setComponentConfig] = useState({
    title: 'My Component',
    backgroundColor: '#ffffff',
    textColor: '#000000',
    borderColor: '#cccccc',
    width: '100%',
    height: 'auto'
  });

  const componentTypes = [
    { value: 'carousel', label: 'Carousel' },
    { value: 'tabs', label: 'Tabs' },
    { value: 'accordion', label: 'Accordion' },
    { value: 'modal', label: 'Modal/Popup' },
    { value: 'dropdown', label: 'Dropdown' },
    { value: 'tooltip', label: 'Tooltip' },
    { value: 'progressbar', label: 'Progress Bar' },
    { value: 'rangeslider', label: 'Range Slider' },
    { value: 'datepicker', label: 'Date Picker' },
    { value: 'alert', label: 'Alert' },
    { value: 'lightbox', label: 'Lightbox' },
    { value: 'canvas', label: 'Canvas' },
    { value: 'animation', label: 'CSS Animation' }
  ];

  const generateHTML5Code = () => {
    let html = '';
    
    switch (selectedComponent) {
      case 'tabs':
        html = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${componentConfig.title}</title>
    <style>
        .tab-container {
            width: ${componentConfig.width};
            background-color: ${componentConfig.backgroundColor};
            border: 1px solid ${componentConfig.borderColor};
            border-radius: 8px;
            overflow: hidden;
            font-family: Arial, sans-serif;
        }
        .tab-buttons {
            display: flex;
            background-color: #f5f5f5;
            border-bottom: 1px solid ${componentConfig.borderColor};
        }
        .tab-button {
            flex: 1;
            padding: 12px 16px;
            background: none;
            border: none;
            cursor: pointer;
            color: ${componentConfig.textColor};
            font-size: 14px;
            transition: background-color 0.3s ease;
        }
        .tab-button:hover {
            background-color: #e0e0e0;
        }
        .tab-button.active {
            background-color: ${componentConfig.backgroundColor};
            border-bottom: 2px solid #007bff;
        }
        .tab-content {
            display: none;
            padding: 20px;
            color: ${componentConfig.textColor};
        }
        .tab-content.active {
            display: block;
        }
    </style>
</head>
<body>
    <div class="tab-container">
        <div class="tab-buttons">
            <button class="tab-button active" onclick="showTab(event, 'tab1')">Tab 1</button>
            <button class="tab-button" onclick="showTab(event, 'tab2')">Tab 2</button>
            <button class="tab-button" onclick="showTab(event, 'tab3')">Tab 3</button>
        </div>
        <div id="tab1" class="tab-content active">
            <h3>Tab 1 Content</h3>
            <p>This is the content for the first tab. You can add any HTML content here.</p>
        </div>
        <div id="tab2" class="tab-content">
            <h3>Tab 2 Content</h3>
            <p>This is the content for the second tab. Customize this as needed.</p>
        </div>
        <div id="tab3" class="tab-content">
            <h3>Tab 3 Content</h3>
            <p>This is the content for the third tab. Add your own content here.</p>
        </div>
    </div>

    <script>
        function showTab(evt, tabName) {
            var i, tabcontent, tablinks;
            
            // Hide all tab content
            tabcontent = document.getElementsByClassName("tab-content");
            for (i = 0; i < tabcontent.length; i++) {
                tabcontent[i].classList.remove("active");
            }
            
            // Remove active class from all tab buttons
            tablinks = document.getElementsByClassName("tab-button");
            for (i = 0; i < tablinks.length; i++) {
                tablinks[i].classList.remove("active");
            }
            
            // Show the selected tab and mark button as active
            document.getElementById(tabName).classList.add("active");
            evt.currentTarget.classList.add("active");
        }
    </script>
</body>
</html>`;
        break;
        
      case 'accordion':
        html = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${componentConfig.title}</title>
    <style>
        .accordion {
            width: ${componentConfig.width};
            background-color: ${componentConfig.backgroundColor};
            border: 1px solid ${componentConfig.borderColor};
            border-radius: 8px;
            overflow: hidden;
            font-family: Arial, sans-serif;
        }
        .accordion-item {
            border-bottom: 1px solid ${componentConfig.borderColor};
        }
        .accordion-item:last-child {
            border-bottom: none;
        }
        .accordion-header {
            padding: 16px;
            background-color: #f8f9fa;
            cursor: pointer;
            color: ${componentConfig.textColor};
            font-weight: bold;
            transition: background-color 0.3s ease;
            position: relative;
        }
        .accordion-header:hover {
            background-color: #e9ecef;
        }
        .accordion-header::after {
            content: '+';
            position: absolute;
            right: 16px;
            font-size: 18px;
            transition: transform 0.3s ease;
        }
        .accordion-header.active::after {
            transform: rotate(45deg);
        }
        .accordion-content {
            max-height: 0;
            overflow: hidden;
            transition: max-height 0.3s ease;
            background-color: ${componentConfig.backgroundColor};
        }
        .accordion-content.active {
            max-height: 200px;
        }
        .accordion-body {
            padding: 16px;
            color: ${componentConfig.textColor};
        }
    </style>
</head>
<body>
    <div class="accordion">
        <div class="accordion-item">
            <div class="accordion-header" onclick="toggleAccordion(this)">
                Section 1
            </div>
            <div class="accordion-content">
                <div class="accordion-body">
                    Content for section 1. This can contain any HTML elements.
                </div>
            </div>
        </div>
        <div class="accordion-item">
            <div class="accordion-header" onclick="toggleAccordion(this)">
                Section 2
            </div>
            <div class="accordion-content">
                <div class="accordion-body">
                    Content for section 2. Add your own content here.
                </div>
            </div>
        </div>
        <div class="accordion-item">
            <div class="accordion-header" onclick="toggleAccordion(this)">
                Section 3
            </div>
            <div class="accordion-content">
                <div class="accordion-body">
                    Content for section 3. Customize as needed.
                </div>
            </div>
        </div>
    </div>

    <script>
        function toggleAccordion(element) {
            const content = element.nextElementSibling;
            const isActive = content.classList.contains('active');
            
            // Close all accordion items
            document.querySelectorAll('.accordion-content').forEach(item => {
                item.classList.remove('active');
            });
            document.querySelectorAll('.accordion-header').forEach(item => {
                item.classList.remove('active');
            });
            
            // Toggle current item
            if (!isActive) {
                content.classList.add('active');
                element.classList.add('active');
            }
        }
    </script>
</body>
</html>`;
        break;
        
      default:
        html = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${componentConfig.title}</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            margin: 20px;
            background-color: #f5f5f5;
        }
        .component {
            width: ${componentConfig.width};
            background-color: ${componentConfig.backgroundColor};
            color: ${componentConfig.textColor};
            border: 1px solid ${componentConfig.borderColor};
            border-radius: 8px;
            padding: 20px;
            margin: 20px auto;
        }
    </style>
</head>
<body>
    <div class="component">
        <h2>HTML5 Component</h2>
        <p>Select a component type to generate specific HTML5 code with inline CSS and JavaScript.</p>
        <p>This code is ready to be copied and pasted into Moodle LMS.</p>
    </div>
</body>
</html>`;
    }
    
    setGeneratedCode(html);
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(generatedCode);
    alert('Code copied to clipboard!');
  };

  return (
    <div className="space-y-8">
      {/* Hero Section */}
      <div className="text-center py-8">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
          LTU LMS HTML5 Code Generator
        </h1>
        <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
          Generate HTML5 components with inline CSS and JavaScript for Moodle LMS deployment.
          All code is accessibility compliant and ready to use.
        </p>
      </div>

      {/* Quick Navigation */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <Link href="/about" className="bg-blue-100 dark:bg-blue-900 p-6 rounded-lg hover:shadow-md transition-shadow">
          <h3 className="text-xl font-semibold text-blue-800 dark:text-blue-200 mb-2">About</h3>
          <p className="text-blue-600 dark:text-blue-300">Learn about this project and watch the demo video</p>
        </Link>
        <Link href="/tabs" className="bg-green-100 dark:bg-green-900 p-6 rounded-lg hover:shadow-md transition-shadow">
          <h3 className="text-xl font-semibold text-green-800 dark:text-green-200 mb-2">Tabs Generator</h3>
          <p className="text-green-600 dark:text-green-300">Create interactive tab components</p>
        </Link>
        <Link href="/coding-races" className="bg-purple-100 dark:bg-purple-900 p-6 rounded-lg hover:shadow-md transition-shadow">
          <h3 className="text-xl font-semibold text-purple-800 dark:text-purple-200 mb-2">Coding Races</h3>
          <p className="text-purple-600 dark:text-purple-300">Interactive coding challenges</p>
        </Link>
      </div>

      {/* HTML5 Code Generator */}
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
        <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">HTML5 Component Generator</h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Configuration Panel */}
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-2">Component Type</label>
              <select 
                value={selectedComponent}
                onChange={(e) => setSelectedComponent(e.target.value)}
                className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
              >
                <option value="">Select a component...</option>
                {componentTypes.map(type => (
                  <option key={type.value} value={type.value}>{type.label}</option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Title</label>
              <input
                type="text"
                value={componentConfig.title}
                onChange={(e) => setComponentConfig({...componentConfig, title: e.target.value})}
                className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium mb-2">Background Color</label>
                <input
                  type="color"
                  value={componentConfig.backgroundColor}
                  onChange={(e) => setComponentConfig({...componentConfig, backgroundColor: e.target.value})}
                  className="w-full h-12 border border-gray-300 dark:border-gray-600 rounded-md"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Text Color</label>
                <input
                  type="color"
                  value={componentConfig.textColor}
                  onChange={(e) => setComponentConfig({...componentConfig, textColor: e.target.value})}
                  className="w-full h-12 border border-gray-300 dark:border-gray-600 rounded-md"
                />
              </div>
            </div>

            <button
              onClick={generateHTML5Code}
              disabled={!selectedComponent}
              className="w-full bg-blue-600 hover:bg-blue-700 disabled:bg-gray-400 text-white font-semibold py-3 px-6 rounded-md transition-colors"
            >
              Generate HTML5 Code
            </button>
          </div>

          {/* Code Output */}
          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <label className="block text-sm font-medium">Generated Code</label>
              {generatedCode && (
                <button
                  onClick={copyToClipboard}
                  className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-md text-sm transition-colors"
                >
                  Copy Code
                </button>
              )}
            </div>
            <textarea
              value={generatedCode}
              readOnly
              placeholder="Generated HTML5 code will appear here..."
              className="w-full h-96 p-4 border border-gray-300 dark:border-gray-600 rounded-md bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white font-mono text-sm"
            />
          </div>
        </div>
      </div>

    </div>
  );
};

export default HomePage;
