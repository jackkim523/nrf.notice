import os
import zipfile
import glob
import shutil

def extract_attachment():
    # Find the attachment file
    files = glob.glob("*.hwpx")
    target_file = None
    for f in files:
        if "붙임1" in f or "2025" in f:
            target_file = f
            break
            
    if target_file:
        print(f"Found attachment: {target_file}")
        # Rename to zip to avoid encoding issues during extraction if needed, 
        # but zipfile.ZipFile can open it directly.
        try:
            with zipfile.ZipFile(target_file, 'r') as zip_ref:
                zip_ref.extractall("extracted_attachment")
            print("Extraction successful.")
        except Exception as e:
            print(f"Error extracting: {e}")
    else:
        print("Attachment file not found.")

if __name__ == "__main__":
    extract_attachment()
