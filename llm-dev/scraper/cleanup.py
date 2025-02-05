import os
import glob

def file_requires_deletion(file_path):
    """Check if a file contains error page text or policy content."""
    try:
        with open(file_path, 'r', encoding='utf-8') as file:
            content = file.read()
            error_indicators = [
                'Page not found – New England First Amendment Coalition Skip to the content Search New England First Amendment Coalition Menu',
                'The page you were looking for could not be found. It might have been removed, renamed, or did not exist in the first place.',
            ]
            return any(indicator in content for indicator in error_indicators)
    except Exception as e:
        print(f"Error reading {file_path}: {e}")
        return False


def remove_unwanted_files():
    """Delete unwanted text files from the 'output' directory."""
    output_dir = "output"

    sharing_patterns = [
        "*__share_facebook_nb_1.txt",
        "*__share_twitter_nb_1.txt"
    ]

    removed_count = 0

    for pattern in sharing_patterns:
        full_pattern = os.path.join(output_dir, pattern)
        for file_path in glob.glob(full_pattern):
            try:
                os.remove(file_path)
                print(f"Removed sharing file: {os.path.basename(file_path)}")
                removed_count += 1
            except Exception as e:
                print(f"Error removing {file_path}: {e}")

    for file_path in glob.glob(os.path.join(output_dir, "*.txt")):
        if file_requires_deletion(file_path):
            try:
                os.remove(file_path)
                print(f"Removed error page: {os.path.basename(file_path)}")
                removed_count += 1
            except Exception as e:
                print(f"Error removing {file_path}: {e}")

    print(f"\nTotal files removed: {removed_count}")


if __name__ == "__main__":
    remove_unwanted_files()
