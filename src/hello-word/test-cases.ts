// import { Equal, Expect, NotAny } from "@type-challenges/utils";
import { Expect, NotAny, Equal } from "@type-challenges/utils";
type cases = [Expect<NotAny<HelloWord>>, Expect<Equal<HelloWord, string>>];
