// Configure your import map in config/importmap.rb. Read more: https://github.com/rails/importmap-rails
import "@hotwired/turbo-rails"
import "controllers"

function scrollToHash() {
  const hash = window.location.hash
  if (hash) {
    const element = document.querySelector(hash)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }
}

document.addEventListener("turbo:load", scrollToHash)
window.addEventListener("hashchange", scrollToHash)
