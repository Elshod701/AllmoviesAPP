"use strict";

movies.splice(100); //3767 ta datadam 100 tasini kesib oldik

// ========================== NORMALIZE ALL MOVIES ==========================
const allMovies = movies.map((el) => {
  return {
    title: el.title,
    year: el.year,
    categories: el.categories,
    lang: el.language,
    time: `${Math.round(el.runtime / 60)}h ${el.runtime % 60}m`,
    link: `https://youtube.com/embed/${el.youtubeId}`,
    summary: el.summary,
    rating: Math.ceil(`${el.imdbRating}`),
    id: el.imdbId,
    minimg: el.smallThumbnail,
    maximg: el.bigThumbnail,
  };
});

console.log(allMovies);

// ========================== RENDER ALL MOVIES ==========================

function renderAllMovies(data) {
  if (data.length) {
    data.forEach((e) => {
      const div = createElement(
        "div",
        "bg-white shadow w-[350px] rounded-lxl",

        ` <img class="overflow-hidden h-[250px] w-full object-center object-cover"
            src="${e.minimg}" />
                  <div class="card-body  p-4">
                    <h2 class="text-lg font-bold">"${e.title}"</h2>

                    <ul> 
                    <li class="li text-yellow-500"> <strong class="text-black">Rating: </strong>
                      ${"<i class='bx bxs-star'></i>".repeat(
                        Math.ceil(e.rating) / 2
                      )}
                    </li>
                    <li><strong>Year: </strong>"${e.year}"</li>
                    <li ><strong>Language: </strong>"${e.lang}" </li>
                    <li ><strong>Runtime: </strong>"${e.time}" </li>
                    <li ><strong>Category: </strong> "${e.categories}" </li>
                    </ul>

                    <div class="button w-full mt-3">
                    <button class="bg-blue-600 text-white rounded-xl focus:ring-3 ring-blue-600 px-4 py-2">Details</button>
                    <a href="${
                      e.link
                    }" target="_blank" class="text-white bg-red-600 rounded-xl focus:ring-23 ring-blue-600 px-4 py-2">YouTube</a>
                    </div>

                  </div>`
      );
      $(".film-wrapper").append(div);
    });
  }
}

renderAllMovies(allMovies);
