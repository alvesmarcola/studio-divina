<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.
<!-- LOVABLE:END -->

- Site copy, links and image imports live in `src/content/site.ts`; sections import from it so content can be swapped without touching components.
- Landing sections are split into `src/components/site/*` (Header, Sections, Reveal); scroll reveals use IntersectionObserver + `reveal` utility, no animation library.
