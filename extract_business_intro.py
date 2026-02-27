import os
import zipfile
import glob
import shutil
import xml.etree.ElementTree as ET

def process_business_intro():
    # Find the target file: 사업소개.hwpx
    target_file = None
    files = glob.glob("*.hwpx")
    for f in files:
        if "사업소개" in f:
            target_file = f
            break
            
    if not target_file:
        print("Error: '사업소개.hwpx' not found.")
        return

    print(f"Processing: {target_file}")
    
    # Extract
    extract_dir = "extracted_business_intro"
    if os.path.exists(extract_dir):
        shutil.rmtree(extract_dir)
    os.makedirs(extract_dir)
    
    try:
        with zipfile.ZipFile(target_file, 'r') as zip_ref:
            zip_ref.extractall(extract_dir)
        print("Extraction successful.")
    except Exception as e:
        print(f"Error extracting: {e}")
        return

    # Parse Content
    content_dir = os.path.join(extract_dir, "Contents")
    if not os.path.exists(content_dir):
        print("Contents directory not found.")
        return

    xml_files = [f for f in os.listdir(content_dir) if f.startswith("section") and f.endswith(".xml")]
    xml_files.sort()
    
    with open("extracted_business_text.txt", "w", encoding="utf-8") as out_file:
        for xml_file in xml_files:
            xml_path = os.path.join(content_dir, xml_file)
            out_file.write(f"\n--- Parsing {xml_file} ---\n")
            try:
                tree = ET.parse(xml_path)
                root = tree.getroot()
                
                # Iterate and extract all text
                for elem in root.iter():
                    if elem.tag.endswith("t"):
                        if elem.text:
                            out_file.write(elem.text)
                    if elem.tag.endswith("p"):
                        out_file.write("\n") 
                        
            except Exception as e:
                out_file.write(f"\nError parsing {xml_file}: {e}\n")
    print("Text extraction complete to extracted_business_text.txt")

if __name__ == "__main__":
    process_business_intro()
