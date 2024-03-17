To Use: 
1. Package these files into a folder.
2. Navigate to your browser' extension management
3. Upload your new folder with content
4. Test it's working by going to 'chat.openai.com'

To Deploy to Enterprise:
**ALWAYS TEST PRIOR TO DEPLOYMENT**
1. Determine where the extension is added to within your borwser of choice
2. Instruct your tool (e.g. SCCM, Ansible) to deliver this payload to that specific folder
3. Ensure your managing browser settings through GPO
4. Enstate strict extensions rules so that users can't disable/uninstall AND that it auto-installs upon start after deployment.

