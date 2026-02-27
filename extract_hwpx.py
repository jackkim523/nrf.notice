import os
import zipfile
import glob

def find_and_extract_hwpx():
    # List all hwpx files
    files = glob.glob("*.hwpx")
    print(f"Found files: {files}")
    
    target_file = None
    for f in files:
        if "사업소개" in f:
            target_file = f
            break
    
    if not target_file:
        print("Could not find '사업소개.hwpx' in the current directory.")
        # Fallback: check if any file has size around 85638
        for f in files:
            if os.path.getsize(f) == 85638:
                print(f"Found file by size: {f}")
                target_file = f
                break
    
    if target_file:
        print(f"Extracting: {target_file}")
        try:
            with zipfile.ZipFile(target_file, 'r') as zip_ref:
                zip_ref.extractall("extracted_hwpx")
            print("Extraction successful.")
            
            # List extracted files
            for root, dirs, files in os.walk("extracted_hwpx"):
                for name in files:
                    print(os.path.join(root, name))
                    
        except Exception as e:
            print(f"Error extracting: {e}")
    else:
        print("Target file not found.")

if __name__ == "__main__":
    find_and_extract_hwpx()
