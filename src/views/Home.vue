<template>
  <div class="home">
      <router-view></router-view>
      <section class="columns py-5 has-background-primary mx-3 mt-2">
          <p class="column is-4">Lorem ipsum dolor sit amet, consectetur adipisicing elit. A autem cupiditate eos maxime, nesciunt odio!
              Assumenda beatae dignissimos ducimus ea eius et fuga id in ipsum magni modi provident quibusdam quis sequi
              tempore, ullam voluptates. Beatae consequuntur corporis id? A, asperiores cum ducimus fugiat fugit illum
              in labore minima mollitia natus neque numquam praesentium quidem rerum similique tempore ut vel, voluptas
              voluptatem, voluptates? Accusantium doloremque eius est ex exercitationem fugiat laboriosam laborum magni,
              necessitatibus placeat quae quia similique suscipit. Consectetur debitis delectus doloribus facere libero
              molestiae odio sed tenetur ut vero. Ad delectus dolorum, libero maxime nemo repellat sint suscipit.
          </p>
          <form action="#" class="column">
              <div class="columns">
                  <div class="input-group column is-6">
                      <label for="last-name" hidden>Nom</label>
                      <input class="input" type="text" name="last-name" id="last-name" placeholder="Nom">
                  </div>
                  <div class="input-group column is-6">
                      <label for="first-name" hidden>Prénom</label>
                      <input class="input" type="text" name="first-name" id="first-name" placeholder="Prénom">
                  </div>
              </div>
              <div class="columns">
                  <div class="input-group column is-9">
                      <label for="email" hidden>Email</label>
                      <input class="input" type="email" name="email" id="email" placeholder="Email">
                  </div>
                  <div class="input-group column is-3">
                      <label for="phone-number" hidden>Téléphone</label>
                      <input class="input" type="tel" name="phone-number" id="phone-number" placeholder="Téléphone">
                  </div>
              </div>
              <div class="columns">
                  <div class="input-group column">
                      <label for="message" hidden>Message</label>
                      <textarea class="textarea" type="email" name="message" id="message" placeholder="Message"></textarea>
                  </div>
              </div>
          </form>
      </section>
      <section class="columns mx-3 is-centered">
          <p class="column is-11">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium ad aliquam commodi deleniti ducimus
              error ex exercitationem facilis hic id illum incidunt ipsa laudantium magnam minus modi molestiae nesciunt
              odit officia perspiciatis placeat quae quia quidem, quo similique sint sunt voluptatibus! Aperiam atque
              culpa deserunt distinctio dolores eligendi eos excepturi illo, impedit inventore laboriosam magni nam nisi
              non perferendis quasi quisquam ratione repellat sint voluptates. Ab alias aperiam asperiores aut cum
              debitis delectus dicta ea eaque excepturi exercitationem facere illo illum impedit in, incidunt iure
              laudantium libero magni mollitia neque nulla quaerat quas quis ratione rerum soluta sunt tempora
              tenetur!</p>
      </section>
  </div>
</template>
