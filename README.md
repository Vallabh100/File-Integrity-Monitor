# File-Integrity-Monitor

Attackers generally conceal their traces by subverting critical files like system logs. File system integrity monitoring is a well-known way to deal with ensuring 
integrity of sensitive and critical files.Malicious users or unauthorized users or malwares might change the content of a sensitive data file or insert malicious payload 
in an executable. Hence, monitoring the integrity of the files in the file system is of utmost importance.

# Scope of application
⇒ Can notify if file gets deleted from given baseline.

⇒ Can notify if file configurations altered.

⇒ Any type of file can be monitored.

⇒ Updated/Altered file logs gets stored into dropbox cloud.

# Concept Behind
⇒ Using 'file-system' module of nodejs, system files can be traced or monitored.

⇒ Generate hash value using md5 of last updated file and checks it with current file hash.

⇒ If two hashes mismatched, new file gets created with updated content.

⇒ Updated file gets uploaded to Dropbox using cloud API. 

# Tools & Technologies Used
⇒ Nodejs

⇒ Dropbox Cloud API

⇒ MD5 hashing algorithm

⇒ Visual Studio Code

⇒ Hyper Terminal

# Demo
https://user-images.githubusercontent.com/108627108/209845530-8ab2e2ab-e6dc-4fe7-afe2-6726c26acf02.mp4


