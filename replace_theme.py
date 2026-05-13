import os
import glob
import re

def replace_in_file(filepath):
    with open(filepath, 'r') as f:
        content = f.read()

    # We need to change:
    # bg-[#0a0a0a] -> bg-[#fafafa]
    # bg-[#111111] -> bg-[#f4f4f5]
    # bg-[#000000] -> bg-white (or maybe keep it clean with bg-white)
    # border-[#333] -> border-gray-200
    # bg-[rgba(31,31,31,0.62)] -> bg-[rgba(255,255,255,0.62)]
    
    # We shouldn't change the layout bg-white text-black, but wait, layout is already updated.

    new_content = content
    
    # text colors
    new_content = new_content.replace('text-white', 'text-black')
    new_content = new_content.replace('text-white/', 'text-black/')
    new_content = new_content.replace('text-gray-300', 'text-gray-700')
    
    # border colors
    new_content = new_content.replace('border-white', 'border-black')
    new_content = new_content.replace('border-white/', 'border-black/')
    new_content = new_content.replace('border-[#333]', 'border-gray-200')
    
    # bg colors
    new_content = new_content.replace('bg-white/', 'bg-black/')
    new_content = new_content.replace('bg-[#0a0a0a]', 'bg-[#fafafa]')
    new_content = new_content.replace('bg-[#111111]', 'bg-[#f4f4f5]')
    new_content = new_content.replace('bg-[#000000]', 'bg-white')
    new_content = new_content.replace('bg-[rgba(31,31,31,0.62)]', 'bg-[rgba(255,255,255,0.8)]')

    if content != new_content:
        with open(filepath, 'w') as f:
            f.write(new_content)
        print(f"Updated {filepath}")

for root, _, files in os.walk('src'):
    for file in files:
        if file.endswith('.tsx') or file.endswith('.ts'):
            replace_in_file(os.path.join(root, file))
