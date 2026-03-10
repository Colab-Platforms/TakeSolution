# Git Branch Rename Guide: main → cms

## Local Branch Rename

```bash
# Current branch ko rename karo
git branch -m main cms

# Verify kar lo
git branch
```

## Remote Branch Update (GitHub)

```bash
# Purana main branch delete karo aur naya cms branch push karo
git push origin -u cms

# Purana main branch remote se delete karo
git push origin --delete main
```

## GitHub Default Branch Change

1. GitHub repository pe jao
2. **Settings** → **Branches** pe click karo
3. **Default branch** section mein **Switch to another branch** button pe click karo
4. **cms** select karo
5. **Update** pe click karo
6. Confirm karo

## Vercel Settings Update

1. Vercel dashboard pe jao
2. Apni project select karo
3. **Settings** → **Git** pe jao
4. **Production Branch** ko `main` se `cms` mein change karo
5. Save karo

## Alternative: GitHub Web Interface se

Agar command line se problem ho:

1. GitHub repository pe jao
2. Branch dropdown pe click karo
3. "View all branches" pe click karo
4. `main` branch ke saamne **...** (three dots) pe click karo
5. **Rename branch** select karo
6. Naya naam `cms` dalo
7. **Rename branch** button pe click karo
8. GitHub automatically default branch update kar dega

## Verification

```bash
# Check current branch
git branch

# Check remote branches
git branch -r

# Check remote URL
git remote -v
```

## Team Members ke liye

Agar team members hain, unhe ye commands run karni hongi:

```bash
# Latest changes fetch karo
git fetch origin

# Local main branch delete karo
git branch -d main

# Naya cms branch track karo
git checkout cms
git branch -u origin/cms
```
