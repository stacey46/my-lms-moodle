'use client';

import React, { useState } from 'react';

const TabsPage = () => {
  const [tabsConfig, setTabsConfig] = useState({
    title: 'Interactive Tabs',
    backgroundColor: '#ffffff',
    textColor: '#000000',
    borderColor: '#cccccc',
    activeColor: '#007bff',
    tabs: [
      { id: 'tab1', label: 'Tab 1', content: 'Content for Tab 1. You can customize this text.' },
      { id: 'tab2', label: 'Tab 2', content: 'Content for Tab 2. Add your own content here.' },
      { id: 'tab3', label: 'Tab 3', content: 'Content for Tab 3. This is fully customizable.' }
    ]
  });

  const [generatedCode, setGeneratedCode] = useState('');

  const addTab = () => {
    const newTabId = `tab${tabsConfig.tabs.length + 1}`;
    const newTab = {
      id: newTabId,
      label: `Tab ${tabsConfig.tabs.length + 1}`,
      content: `Content for Tab ${tabsConfig.tabs.length + 1}. Add your content here.`
    };
    setTabsConfig({
      ...tabsConfig,
      tabs: [...tabsConfig.tabs, newTab]
    });
  };

  const removeTab = (index: number) => {
    if (tabsConfig.tabs.length > 1) {
      const newTabs = tabsConfig.tabs.filter((_, i) => i !== index);
      setTabsConfig({
        ...tabsConfig,
        tabs: newTabs
      });
    }
  };

  const updateTab = (index: number, field: 'label' | 'content', value: string) => {
    const newTabs = [...tabsConfig.tabs];
    newTabs[index][field] = value;
    setTabsConfig({
      ...tabsConfig,
      tabs: newTabs
    });
  };

  const generateTabsHTML = () => {
    const html = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${tabsConfig.title}</title>
    <style>
        .tab-container {
            width: 100%;
            max-width: 800px;
            margin: 20px auto;
            background-color: ${tabsConfig.backgroundColor};
            border: 1px solid ${tabsConfig.borderColor};
            border-radius: 8px;
            overflow: hidden;
            font-family: Arial, sans-serif;
            box-shadow: 0 2px 4px rgba(0,0,0,0.1);
        }
        .tab-buttons {
            display: flex;
            background-color: #f8f9fa;
            border-bottom: 1px solid ${tabsConfig.borderColor};
            flex-wrap: wrap;
        }
        .tab-button {
            flex: 1;
            min-width: 120px;
            padding: 12px 16px;
            background: none;
            border: none;
            cursor: pointer;
            color: ${tabsConfig.textColor};
            font-size: 14px;
            font-weight: 500;
            transition: all 0.3s ease;
            border-bottom: 3px solid transparent;
        }
        .tab-button:hover {
            background-color: #e9ecef;
        }
        .tab-button.active {
            background-color: ${tabsConfig.backgroundColor};
            border-bottom-color: ${tabsConfig.activeColor};
            color: ${tabsConfig.activeColor};
            font-weight: 600;
        }
        .tab-button:focus {
            outline: 2px solid ${tabsConfig.activeColor};
            outline-offset: -2px;
        }
        .tab-content {
            display: none;
            padding: 24px;
            color: ${tabsConfig.textColor};
            line-height: 1.6;
            min-height: 150px;
        }
        .tab-content.active {
            display: block;
            animation: fadeIn 0.3s ease-in;
        }
        @keyframes fadeIn {
            from { opacity: 0; transform: translateY(10px); }
            to { opacity: 1; transform: translateY(0); }
        }
        .tab-content h3 {
            margin-top: 0;
            color: ${tabsConfig.activeColor};
        }
        
        /* Responsive design */
        @media (max-width: 600px) {
            .tab-button {
                flex: none;
                width: 100%;
                text-align: left;
            }
            .tab-content {
                padding: 16px;
            }
        }
        
        /* Accessibility improvements */
        .tab-button[aria-selected="true"] {
            background-color: ${tabsConfig.backgroundColor};
            border-bottom-color: ${tabsConfig.activeColor};
        }
    </style>
</head>
<body>
    <div class="tab-container" role="tablist" aria-label="${tabsConfig.title}">
        <div class="tab-buttons">
            ${tabsConfig.tabs.map((tab, index) => `
            <button 
                class="tab-button${index === 0 ? ' active' : ''}" 
                onclick="showTab(event, '${tab.id}')"
                role="tab"
                aria-selected="${index === 0 ? 'true' : 'false'}"
                aria-controls="${tab.id}"
                id="btn-${tab.id}"
            >
                ${tab.label}
            </button>`).join('')}
        </div>
        ${tabsConfig.tabs.map((tab, index) => `
        <div 
            id="${tab.id}" 
            class="tab-content${index === 0 ? ' active' : ''}"
            role="tabpanel"
            aria-labelledby="btn-${tab.id}"
            ${index !== 0 ? 'aria-hidden="true"' : ''}
        >
            <h3>${tab.label} Content</h3>
            <p>${tab.content}</p>
        </div>`).join('')}
    </div>

    <script>
        function showTab(evt, tabName) {
            var i, tabcontent, tablinks;
            
            // Hide all tab content
            tabcontent = document.getElementsByClassName("tab-content");
            for (i = 0; i < tabcontent.length; i++) {
                tabcontent[i].classList.remove("active");
                tabcontent[i].setAttribute("aria-hidden", "true");
            }
            
            // Remove active class from all tab buttons
            tablinks = document.getElementsByClassName("tab-button");
            for (i = 0; i < tablinks.length; i++) {
                tablinks[i].classList.remove("active");
                tablinks[i].setAttribute("aria-selected", "false");
            }
            
            // Show the selected tab and mark button as active
            document.getElementById(tabName).classList.add("active");
            document.getElementById(tabName).setAttribute("aria-hidden", "false");
            evt.currentTarget.classList.add("active");
            evt.currentTarget.setAttribute("aria-selected", "true");
        }
        
        // Keyboard navigation support
        document.addEventListener('keydown', function(e) {
            const activeButton = document.querySelector('.tab-button.active');
            const buttons = Array.from(document.querySelectorAll('.tab-button'));
            const currentIndex = buttons.indexOf(activeButton);
            
            if (e.key === 'ArrowRight' || e.key === 'ArrowLeft') {
                e.preventDefault();
                let newIndex;
                if (e.key === 'ArrowRight') {
                    newIndex = (currentIndex + 1) % buttons.length;
                } else {
                    newIndex = (currentIndex - 1 + buttons.length) % buttons.length;
                }
                buttons[newIndex].click();
                buttons[newIndex].focus();
            }
        });
    </script>
</body>
</html>`;
    
    setGeneratedCode(html);
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(generatedCode);
    alert('Tabs HTML code copied to clipboard!');
  };

  return (
    <div className="max-w-6xl mx-auto space-y-8">
      {/* Header */}
      <div className="text-center py-6">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
          Interactive Tabs Generator
        </h1>
        <p className="text-lg text-gray-600 dark:text-gray-300">
          Create customizable tab components with HTML5, CSS, and JavaScript
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Configuration Panel */}
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
          <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">Tab Configuration</h2>
          
          <div className="space-y-6">
            {/* Basic Settings */}
            <div>
              <label className="block text-sm font-medium mb-2">Title</label>
              <input
                type="text"
                value={tabsConfig.title}
                onChange={(e) => setTabsConfig({...tabsConfig, title: e.target.value})}
                className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
              />
            </div>

            {/* Color Settings */}
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium mb-2">Background Color</label>
                <input
                  type="color"
                  value={tabsConfig.backgroundColor}
                  onChange={(e) => setTabsConfig({...tabsConfig, backgroundColor: e.target.value})}
                  className="w-full h-12 border border-gray-300 dark:border-gray-600 rounded-md"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Text Color</label>
                <input
                  type="color"
                  value={tabsConfig.textColor}
                  onChange={(e) => setTabsConfig({...tabsConfig, textColor: e.target.value})}
                  className="w-full h-12 border border-gray-300 dark:border-gray-600 rounded-md"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Border Color</label>
                <input
                  type="color"
                  value={tabsConfig.borderColor}
                  onChange={(e) => setTabsConfig({...tabsConfig, borderColor: e.target.value})}
                  className="w-full h-12 border border-gray-300 dark:border-gray-600 rounded-md"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Active Color</label>
                <input
                  type="color"
                  value={tabsConfig.activeColor}
                  onChange={(e) => setTabsConfig({...tabsConfig, activeColor: e.target.value})}
                  className="w-full h-12 border border-gray-300 dark:border-gray-600 rounded-md"
                />
              </div>
            </div>

            {/* Tab Management */}
            <div>
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-lg font-semibold">Tabs</h3>
                <button
                  onClick={addTab}
                  className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-md text-sm transition-colors"
                >
                  Add Tab
                </button>
              </div>
              
              <div className="space-y-4 max-h-96 overflow-y-auto">
                {tabsConfig.tabs.map((tab, index) => (
                  <div key={tab.id} className="border border-gray-200 dark:border-gray-600 rounded-md p-4">
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-medium text-sm">Tab {index + 1}</span>
                      {tabsConfig.tabs.length > 1 && (
                        <button
                          onClick={() => removeTab(index)}
                          className="text-red-600 hover:text-red-800 text-sm"
                        >
                          Remove
                        </button>
                      )}
                    </div>
                    <div className="space-y-2">
                      <input
                        type="text"
                        placeholder="Tab Label"
                        value={tab.label}
                        onChange={(e) => updateTab(index, 'label', e.target.value)}
                        className="w-full p-2 border border-gray-300 dark:border-gray-600 rounded text-sm bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                      />
                      <textarea
                        placeholder="Tab Content"
                        value={tab.content}
                        onChange={(e) => updateTab(index, 'content', e.target.value)}
                        rows={3}
                        className="w-full p-2 border border-gray-300 dark:border-gray-600 rounded text-sm bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <button
              onClick={generateTabsHTML}
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-md transition-colors"
            >
              Generate Tabs HTML
            </button>
          </div>
        </div>

        {/* Code Output */}
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Generated HTML Code</h2>
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
            placeholder="Configure your tabs and click 'Generate Tabs HTML' to see the code here..."
            className="w-full h-96 p-4 border border-gray-300 dark:border-gray-600 rounded-md bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white font-mono text-xs"
          />
          
          {generatedCode && (
            <div className="mt-4 p-4 bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-md">
              <h3 className="font-semibold text-blue-800 dark:text-blue-200 mb-2">Usage Instructions:</h3>
              <ul className="text-sm text-blue-700 dark:text-blue-300 space-y-1">
                <li>• Copy the generated HTML code</li>
                <li>• Paste it into a new .html file</li>
                <li>• Open the file in a web browser to test</li>
                <li>• Copy and paste into Moodle LMS as needed</li>
                <li>• The code includes accessibility features and keyboard navigation</li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default TabsPage;
