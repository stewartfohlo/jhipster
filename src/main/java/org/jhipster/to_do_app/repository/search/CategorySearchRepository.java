package org.jhipster.to_do_app.repository.search;

import org.jhipster.to_do_app.domain.Category;
import org.springframework.data.elasticsearch.repository.ElasticsearchRepository;

/**
 * Spring Data Elasticsearch repository for the {@link Category} entity.
 */
public interface CategorySearchRepository extends ElasticsearchRepository<Category, Long> {
}
